import React, { useState, useEffect } from 'react'
import './OneNote.css'
import TextareaAutosize from 'react-autosize-textarea';

export const OneNote = ({ id, note, onDelete, editingModeFinish, color, putEditNote, setNewColor }) => {
    const [showColors, setShowColors] = useState("d-none card-text")

     const [colorPick, setColorPick] = useState({
        color: color
    })
    const [editedNote, setEditedNote] = useState({
        title: ""
    })
    const onNoteChange = (e) => {
        setEditedNote({
            title: e.target.value
        })
    }

    const changeColor = (id, choosenColor, note) => {
        const newData = {
            title: note,
            color: choosenColor
        }
        setColorPick(choosenColor)
        setNewColor(id, newData)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const Data = {
            title: editedNote.title,
            color: colorPick.color
        }
        if (editedNote.title.length === 0 || editedNote.title === note) {
            return
        }
        if (editedNote.title.length === "") {
            onDelete()
        } else {
            putEditNote(id, Data)
            editingModeFinish()
        }
    }

    useEffect(() => {
    }, [])

    return (
        <div id = "card-note" className={color}>
            <div className="card-header">
                <TextareaAutosize className="card-text"
                    onChange={onNoteChange}
                    defaultValue={note}
                    onBlur={submitHandler}>
                </TextareaAutosize>
                

            </div>
            <div>
                {showColors === "d-none card-text"
                    // ? <i className="arrow fas fa-chevron-circle-down" onClick={() => setShowColors("d-flex justify-content-center card-text")} />
                    ? <i className="arrow fas fa-chevron-circle-down" onClick={() => setShowColors("d-flex justify-content-center align-items-center")} />
                    : <i className="arrow fas fa-chevron-circle-up" onClick={() => setShowColors("d-none card-text")} />}

                <div className= {showColors} >
                    <div id = "color-icon" className = "p-2 bd-highlight">
                    <i className="green-icon fas fa-square f0c8" onClick={() => changeColor(id, "card text-white bg-success mb-3", note)} />
                    <i className="red-icon fas fa-square f0c8" onClick={() => changeColor(id, "card text-white bg-primary mb-3", note)} />
                    <i className="grey-icon fas fa-square f0c8" onClick={() => changeColor(id, "card text-white bg-secondary mb-3", note)} />
                    <i className="orange-icon fas fa-square f0c8" onClick={() => changeColor(id, "card text-white bg-danger mb-3", note)} />
                    <i className="yellow-icon fas fa-square f0c8" onClick={() => changeColor(id, "card text-white bg-warning mb-3", note)} />
                    <i className="blue-icon fas fa-square f0c8" onClick={() => changeColor(id, "card text-white bg-info mb-3", note)} />
                    <i className="black-icon fas fa-square f0c8" onClick={() => changeColor(id, "card text-white bg-dark mb-3", note)} />
                    <i className="basic-icon far fa-square" onClick={() => changeColor(id, "card border-primary mb-3", note)} />
                    </div>
                    <button id = "trash" className="btn btn-primary btn-sm" onClick={() => onDelete(id)}>
                        <i className="fas fa-trash-alt" />
                    </button>
                </div>
                
            </div>

        </div>
    )
}