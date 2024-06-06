import React from 'react'
import styles from './BotaoPrincipal.module.css'


export default function BotaoPrincipal({children, lg}) {
  return (
    <button className={`
    ${styles.botaoPrincipal}
    ${lg && styles.lg}
    `}>{children}</button>
  )
}
