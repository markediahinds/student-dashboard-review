import React from 'react'
import NavBar from './components/NavBar/NavBar'
import CohortList from './components/CohortList/CohortList'
import StudentList from './components/StudentList/StudentList'
import './styles/app.scss'

const App = () => {
  return (
    <div className='app'>
    <NavBar/>
    <CohortList/>
    <StudentList/>
    </div>
  )
}

export default App