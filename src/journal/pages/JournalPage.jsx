import { useDispatch, useSelector } from "react-redux"
import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal"


export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal )

  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>
      {/* <Typography>Journal Page</Typography> */}

      {
        (!!active)
          ? <NoteView/>
          : <NothingSelectedView/>
      }

      {/* NothingSelected */}
      {/* { <NothingSelectedView/> }  */}

      <IconButton
        onClick={ onClickNewNote }
        size='large'
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          '&:hover': {backgroundColor: 'error.main', opacity: .6},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
      {/* { <NoteView/> } */}
    </JournalLayout>
  )
}
