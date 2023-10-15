import React from 'react'
import { Route, Router } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Navigation = () => {
  return (
    <Router>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Router>
  )
}

export default Navigation
