import React from 'react'

import * as Styled from './styles'

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Menu>
        <div>Home</div>
        <div>Sobre</div>
        <div>Portfólio</div>
        <div>Contato</div>
      </Styled.Menu>
    </Styled.Container>
  )
}

export default Header
