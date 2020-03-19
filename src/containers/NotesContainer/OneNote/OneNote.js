import React, { useState, useEffect } from 'react'
import './OneNote.css'

export const OneNote = ({ id, title, onDelete }) => {
    const[styleCard, setStyleCard] = useState("card border-primary mb-3")

    useEffect(() => {
    }, [])
    
    return (
        <div className = {styleCard} >
            <div className ="card-header">
                <p className ="card-text">{title}</p>
                <button className = "btn btn-primary btn-sm float-right" onClick = {() => onDelete(id)}>
                    <i className="fas fa-trash-alt" />
                </button>
                <button className = "btn btn-primary btn-sm float-left">
                    <i className="fas fa-pen" />
                </button>
                
            </div>
            <div className ="card-body"> 
                <i className ="green-icon fas fa-square f0c8" onClick = {() => setStyleCard("card text-white bg-success mb-3")} />
                <i className ="red-icon fas fa-square f0c8" onClick = {() => setStyleCard("card text-white bg-primary mb-3")} />
                <i className ="grey-icon fas fa-square f0c8" onClick = {() => setStyleCard("card text-white bg-secondary mb-3")} />
                <i className ="orange-icon fas fa-square f0c8" onClick = {() => setStyleCard("card text-white bg-danger mb-3")} />
                <i className ="yellow-icon fas fa-square f0c8" onClick = {() => setStyleCard("card text-white bg-warning mb-3")} />
                <i className ="blue-icon fas fa-square f0c8" onClick = {() => setStyleCard("card text-white bg-info mb-3")} />
                <i className ="black-icon fas fa-square f0c8" onClick = {() => setStyleCard("card text-white bg-dark mb-3")} />
                <i className ="basic-icon far fa-square" onClick = {() => setStyleCard("card border-primary mb-3")} />
            </div>
        </div>
    )
}