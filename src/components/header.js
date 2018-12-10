import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import fotoIcon from '../images/favicon.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
  
  <div className="foto"><img src={fotoIcon} alt="Antonio Viñuales" /></div>
  
  <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  <div style={{
            color: '#fc0',
          }}>El diario de Antonio Viñuales</div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
