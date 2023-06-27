import { Link as RouterLink } from 'react-router-dom'
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startCreatingUerWithEmailPassword } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: ''
}


export const RegisterPage = () => {

  const dispatch = useDispatch()
  
  const formValidations = {
    email: [(value)=>value.includes('@'), 'El correo debe de tener una @'],
    password: [(value)=>value.length >=6, 'El password debe de tener mas de 6 letras'],
    displayName: [(value)=> value.length >=1, 'El nombre es obligatorio']
  }

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { 
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, 
    emailValid, passwordValid } = useForm(formData, formValidations)

  const onSubmit = (event) =>{
    event.preventDefault()
    setFormSubmitted(true)

    if( !isFormValid ) return

    dispatch( startCreatingUerWithEmailPassword(formState) )
  }

  return (
    <AuthLayout title='Crear cuenta'>
      <h1>FormValid { isFormValid ? 'Valido': 'Incorrecto' } </h1>
      <form onSubmit={ onSubmit }>
          <Grid container>
            
            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                name='displayName' 
                value={ displayName } 
                onChange={ onInputChange } 
                label='Nombre completo' 
                type='text' 
                placeholder='Nombre' 
                fullWidth
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                name='email' 
                value={ email } 
                onChange={ onInputChange }  
                label='Correo' 
                type='email' 
                placeholder='correo@google.com' 
                fullWidth
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
              />
            </Grid>

            <Grid item xs={12} sx={{ mt:2 }}>
              <TextField 
                name='password' 
                value={ password } 
                onChange={ onInputChange }  
                label='Contraseña' 
                type='password' 
                placeholder='Contraseña' 
                fullWidth
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2, mt:1}}>

              <Grid item xs={12} sm={6}>
                <Button type='submit' variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>


          </Grid>
        </form>
    </AuthLayout>
  )
}
