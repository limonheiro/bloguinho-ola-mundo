import { NavLink } from 'react-router-dom'
import styles from './MenuLink.module.css'

import React from 'react'

export default function MenuLink({children, to}) {
    // const location = useLocation()
  return (
    
    <NavLink to={to} className={({ isActive }) => [isActive ? styles.linkDestacado : '', styles.link ].join(' ') }>
      {children}
    </NavLink>
    
    // <Link to="/sobre" className={styles.link}>
    //   Sobre Min
    // </Link>

  )
}
