import React from 'react'
import Header from '../../components/header'
import Body from '../../components/body'
import Footer from '../../components/footer'

const Main: React.FunctionComponent = () => {
  return (
    <div style={{
      display: 'flex',
      flexFlow: 'column',
      height: '100%'
    }}>
      <Header />
      <Body />
      <Footer />
    </div >
  )
}

export default Main
