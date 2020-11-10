import React from 'react'
import Head from 'next/head'

import { Container, ContentContainer } from '../styles/pages/Home'
import Header from '../components/header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <ContentContainer>
        <Header />
      </ContentContainer>
    </Container>
  )
}

export default Home
