import React, { useState } from 'react'
import './About.css'
import styled from 'styled-components'
import Translate from 'react-translate-component'
import TextareaAutosize from 'react-autosize-textarea';

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 1rem;
  `
const About = () => {
    const [localEditMode, setLocalEditMode] = useState(false)
    const [showCard, setShowCard] = useState("d-none")
    const [colorCard, setColorCard] = useState("card border-primary mb-3")
    const adder = (
        <button className="btn btn-primary float-left" onClick={() => setLocalEditMode(true)}>
            <i className="fas fa-plus-circle" />
        </button>
    )
    return (
        <React.Fragment>
            <div className="jumbotron">
                <Translate component='p' className="lead" content='about.textabout' />
            </div>
            <Main>
                {/* Add button */}
                <div className="col-sm-3 mb-3">
                    {localEditMode
                        ? <form className="card border-primary mb-3">
                            <div className="card-body">
                                <div className="card-text">
                                    <Translate component={TextareaAutosize}
                                        type='text'
                                        disabled
                                        attributes={{ placeholder: 'about.placeholder' }} />
                                </div>
                                <button type="button" className="btn btn-primary btn-sm float-right"
                                    onClick={() => setShowCard("col-sm-3 mb-3")}>
                                    <i className="fas fa-check-circle" />
                                </button>
                            </div>
                        </form>
                        : adder}
                </div>
                <div className={showCard}>
                    <div className={colorCard} id="card-note">
                        <div className="card-header">
                            <Translate component={TextareaAutosize} disabled attributes={{ value: 'about.noteText' }} />
                        </div>
                        <div>
                            <i className="arrow fas fa-chevron-circle-up" />

                            <div className="d-flex justify-content-center align-items-center" >
                                <div id="color-icon" className="p-2 bd-highlight">
                                    <i className="green-icon fas fa-square f0c8" onClick={() => setColorCard("card text-white bg-success mb-3")} />
                                    <i className="red-icon fas fa-square f0c8" onClick={() => setColorCard("card text-white bg-primary mb-3")} />
                                    <i className="grey-icon fas fa-square f0c8" onClick={() => setColorCard("card text-white bg-secondary mb-3")} />
                                    <i className="orange-icon fas fa-square f0c8" onClick={() => setColorCard("card text-white bg-danger mb-3")} />
                                    <i className="yellow-icon fas fa-square f0c8" onClick={() => setColorCard("card text-white bg-warning mb-3")} />
                                    <i className="blue-icon fas fa-square f0c8" onClick={() => setColorCard("card text-white bg-info mb-3")} />
                                    <i className="black-icon fas fa-square f0c8" onClick={() => setColorCard("card text-white bg-dark mb-3")} />
                                    <i className="basic-icon far fa-square" onClick={() => setColorCard("card border-primary mb-3")} />

                            </div>
                                <button id="trash" className="btn btn-primary btn-sm" onClick = {() => setShowCard("d-none")}>
                                    <i className="fas fa-trash-alt" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </React.Fragment>
    )
}
export default About