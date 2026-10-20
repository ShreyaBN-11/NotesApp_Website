import { useState, useEffect } from 'react'
import { React } from 'react'
import Navbar from "./navbar.jsx"
import Card from './card.jsx'
import reactDOM from "react-dom/client"
import { Route, Routes, Link } from 'react-router-dom'

const Home = () => {

    const [notes, setNotes] = useState([])
    const [currentNotes, setCurrentNotes] = useState([{ title: "", desc: "" }])
    let localnote = [];

    useEffect(() => {
        localnote = JSON.parse(localStorage.getItem("mynotes"))
        if (localnote) {
            setNotes(localnote)
        }
    }, [])

    const handleChange = (e) => {
        setCurrentNotes({ ...currentNotes, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNotes([...notes, currentNotes])
        setCurrentNotes({ title: "", desc: "" })
        localStorage.setItem("mynotes", JSON.stringify([...notes, currentNotes]))
    }

    const handleDelete = (title) => {
        setNotes(notes.filter((note) => note.title != title))
        localStorage.setItem("mynotes", JSON.stringify(notes.filter((note) => note.title != title)))
    }
    return (
        <>
            <div className="nav">
                <Navbar /></div>
            <main>
                <h1>Create your Notes</h1>
                <form onSubmit={handleSubmit}>
                    Title
                    <input type="text" name="title" id="title" onChange={handleChange} value={currentNotes.title} placeholder='Enter the title of the card' />
                    Description
                    <textarea name="desc" id="desc" onChange={handleChange} value={currentNotes.desc} placeholder='Enter the description of the card'></textarea>
                    <button>Submit</button>
                </form>
            </main>
            <h2>Your Notes</h2>
            <section>
                <div className="cardcontainer">
                    {notes && notes.map(note => {
                        return <Card key={note.title} title={note.title} desc={note.desc} handleDelete={handleDelete} />
                    })}
                </div>
                {(!notes || notes.length == 0) && <div id="addNote">Add a note</div>}
            </section>
        </>
    )
}

export default Home