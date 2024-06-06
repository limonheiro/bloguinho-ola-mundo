import React from 'react'
import styles from './NaoEncontrado.module.css'
import erro404 from '../../assets/erro_404.png'
import Menu from '../../Componentes/Menu'
import BotaoPrincipal from '../../Componentes/BotaoPrincipal'
import { useNavigate } from "react-router-dom";

export default function NaoEncontrado() {

  const navegar = useNavigate()

  return (
    <>
      <Menu />
      <div className={styles.conteudoContainer}>
          <span className={styles.texto404}>
          404
          </span>
          <span className={styles.titulo}>
              Ops! Página não encontrada
          </span>
          <p className={styles.paragrafo}>
              Tem certeza que era isso que você estava procurando?
          </p>

          <div 
          className={styles.botaoContainer}
          onClick={()=> navegar(-1)}
          >
            <BotaoPrincipal lg>
            Voltar
            </BotaoPrincipal>
          </div>

          <img className={styles.imageCachorro} src={erro404} />
      </div>
      <div className={styles.espacoEmBranco}>

      </div>
    </>
  )
}
