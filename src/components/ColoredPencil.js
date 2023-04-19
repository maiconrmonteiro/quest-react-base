import styles from './ColoredPencil.module.css'

function colorPurple() {
    let text = document.getElementById('poem')
    text.style.color = "#4E3C62"
    text.style.fontWeight = "bolder"
}

function colorBlue() {
    let text = document.getElementById('poem')
    text.style.color = "#099CDC"
    text.style.fontWeight = "bolder"
}

function colorGreen() {
    let text = document.getElementById('poem')
    text.style.color = "#52B236"
    text.style.fontWeight = "bolder"
}

function colorOrange() {
    let text = document.getElementById('poem')
    text.style.color = "#F1702F"
    text.style.fontWeight = "bolder"
}

function colorBrown() {
    let text = document.getElementById('poem')
    text.style.color = "#795349"
    text.style.fontWeight = "bolder"
}

function Buttons() {
    return (
        <div className={styles.list}>
            <ul>
                <li onClick={colorPurple} className={styles.purple}> </li>

                <li onClick={colorBlue} className={styles.blue}> </li>

                <li onClick={colorGreen} className={styles.green}> </li>

                <li onClick={colorOrange} className={styles.orange}> </li>

                <li onClick={colorBrown} className={styles.brown}> </li>
            </ul>
        </div>
    )
}

export default Buttons