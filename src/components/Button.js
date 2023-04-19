import styles from './Button.module.css'

function Button( { label } ) {

    function alertCv(){
        alert('A label desse botão é Baixar CV')
    }

    return (

        <div className={styles.btn}>
            <button onClick={alertCv}>{label}</button>
        </div>
    )
}

export default Button
