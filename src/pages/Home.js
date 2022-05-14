import React, { Component } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'

export default class Home extends Component {
  render() {
    return (
      <div className='home-page'>
          <Header />
          <Form />
      </div>
    )
  }
}
