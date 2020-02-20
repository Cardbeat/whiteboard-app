import * as React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

const Welcome = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Home = () => {
  return (
    <Container>
      <Header />
      <Welcome>DraWinning</Welcome>
    </Container>
  )
}

export default Home
