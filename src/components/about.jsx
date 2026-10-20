import Navbar from "./navbar"
import "./about.css"

const About = () => {

    return (
        <>
            <div className="nav">
                <Navbar /></div>
            <h1 className="textt">About this app</h1>
            <p className="textt">This is Synapse which allows you to createyour own notes in the form of cards
                and use it from anywhere and everywhere you wish to.<br />
                Guide:
                <ul>
                    <li>Enter the title and description</li>
                    <li>Click on submit</li>
                    <li>To delete press on the delete button on the card</li>
                    <li>Now you are good to go</li>
                </ul>
            </p>
        </>
    )

}

export default About