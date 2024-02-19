import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {

  const {isSaving, active} = useSelector(state => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {

    dispatch( startNewNote() );

  }
  
  return (
    <JournalLayout>
      {/* <Typography >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt exercitationem non! Porro magnam expedita vero totam, rem alias blanditiis perferendis quidem, mollitia voluptates vel laboriosam, numquam placeat quas repudiandae!
      </Typography> */}

      {
        active ? <NoteView /> : <NothingSelectedView/>
      }

      {/* <NothingSelectedView/>
      <NoteView /> */}

      <IconButton 
        onClick={onClickNewNote}
        size='large'
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
      
    </JournalLayout>
  )
}
