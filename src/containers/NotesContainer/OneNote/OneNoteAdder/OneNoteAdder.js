import React, { useState } from 'react'
import './OneNoteAdder.css'

export const OneNoteAdder = ({ editingModeFinish, addNote}) => {
    const[textNote, setTextNote] = useState({
        title: ""
        })

    const onTitleChange = (e) => {
        setTextNote({
            title: e.target.value
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        const Data = {
            title: textNote.title,
            color: "card border-primary mb-3"
        }
        if (textNote.title.trim().length === 0) {
            setTextNote({
                title: ""
            })
            editingModeFinish()
        } else {
            addNote(Data)
            editingModeFinish()
            setTextNote({
                title: ""
            })
        }
    }

    return (
        <form className="card border-primary mb-3" onSubmit = {submitHandler}>
            <div className="card-body">
                <div className="card-text">
                    <textarea placeholder = "Note it!" 
                        type = "text"
                        autoFocus = {true} 
                        onChange = {onTitleChange} 
                        value = {textNote.title} />
                </div>
                <button type="button" className="btn btn-primary btn-sm float-right" 
                    onClick = {submitHandler}>
                        {textNote.title.trim().length === 0 
                            ? <i className ="fas fa-times-circle" /> 
                            : <i className="fas fa-check-circle" />}
                </button>
            </div>
        </form>
    )
}

