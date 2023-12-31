import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from "@mui/icons-material"
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal'


export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch()
    

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
    }

    const newTitle = useMemo(() => {
        return title.length > 13
            ? title.substring( 0,13 ) + '...'
            : title
    }, [ title ])

    const newBody = useMemo(() => {
        return body.length > 13
            ? body.substring( 0,13 ) + '...'
            : body
    }, [ body ])

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onClickNote }>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText 
                    primary={ newTitle }  
                    secondary={ newBody } 
                    sx={{ marginTop: '8px' }}
                />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
