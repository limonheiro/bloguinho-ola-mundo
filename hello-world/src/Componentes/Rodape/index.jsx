import MarcaRegistrada from '../../assets/MarcaRegistrada'
import styles from './Rodape.module.css'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada/>
        Desenvolvido por Alura
    </footer>
  )
}
