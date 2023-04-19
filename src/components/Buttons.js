import styles from './Buttons.module.css'



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
                <a onClick={colorPurple}>
                    <li className={styles.purple}> </li>
                </a>
                <a onClick={colorBlue}>
                    <li className={styles.blue}> </li>
                </a>
                <a onClick={colorGreen}>
                    <li className={styles.green}> </li>
                </a>
                <a onClick={colorOrange}>
                    <li className={styles.orange}> </li>
                </a>
                <a onClick={colorBrown}>
                    <li className={styles.brown}> </li>
                </a>
            </ul>
        </div>
    )
}

export default Buttons