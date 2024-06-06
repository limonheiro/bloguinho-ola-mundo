import PostModelo from "../../Componentes/PostModelo"
import fotocapa from '../../assets/minha_foto.png'
import fotoSobreMim from "../../assets/sobre_mim_foto.png"
import styles from './SobreMin.module.css'

const SobreMin = () =>{
    return(
        <PostModelo
            FotoCapa={fotocapa}
            titulo='Sobre Min'
        >
                        <h3 className={styles.subtitulo}>
                Olá, eu sou o Antônio!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />
            conteudo
        </PostModelo>
    )
}

export default SobreMin