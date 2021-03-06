import React, {useState, useEffect, useRef} from 'react'



function NoteForm(props) {
    const [input, setInput] = useState('');

    const inputRef=useRef(null)

    useEffect(()=>{inputRef.current.focus()})
    
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handelSubmit = e => {
        e.preventDefault();
    
         props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
         
        setInput('');
    
    };
    
    return (
      <form className = "note-form" onSubmit={handelSubmit}>
          <input type="text" placeholder="Add note" value={input} name="text" className='note-input' onChange={handleChange} ref={inputRef}/>
          <button className = 'note-button'>Add</button>
      </form> 
    )
}

export default NoteForm
