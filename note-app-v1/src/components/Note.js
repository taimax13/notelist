import React, {useState} from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import removeNote from './NoteList'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Note({notes, completeNote}) {
    const [edit, setEdit]=useState({
        id:null,
        value: ''
    })


    return notes.map((note,index)=>(
        <div className={note.complete ? 'note-row complete' : 'note-row'} key={index}>
            <div key={note.id} onClick={()=> completeNote(note.id)}>
                {note.text}
            </div>
        <div className = 'icons'>
            <RiCloseCircleLine 
            onClick={()=>removeNote(note.id)}
            className='delete-icon' />
            <TiEdit onClick={()=>setEdit({id:note.id, value: note.text})}
            className='delete-icon' />
            </div>    
        </div>
    ))
}

export default Note