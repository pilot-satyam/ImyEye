import React, { Component } from 'react'
import Base from "../Components/Base";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Style/Global.css'

library.add(fas)

class ErrorPage extends Component {
  render() {
    return (
    <Base>
      <div className='mt-5 parent'>
        
        <h1 >You are at wrong path!</h1>

        

        <FontAwesomeIcon icon="spinner" className="fa-spin" size="6x" color="red" />

      </div>
    </Base>
    )
  }
}

export default ErrorPage
