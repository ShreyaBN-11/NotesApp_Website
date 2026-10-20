import "./card.css"
import React from "react"

const Card = (prop) => {

    return (
        <div className="card">
            <div className="title">{prop.title}</div>
            <div>{prop.desc}</div>
            <button className="del" onClick={() => { prop.handleDelete(prop.title) }}>Delete</button>
        </div >
    )
}

export default Card