import Call from "./Call"
import img from '../img/line.png'

function Paragraph( { text } ) {
    return (
        <>
           
            <p id="poem" className="poem">{text}</p>

            <img src={img} />

            <Call color='red'/>
        </>
    )
}

export default Paragraph