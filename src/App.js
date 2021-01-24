import React, { useState, useEffect } from 'react'
import Nav from './components/nav'
import Main from './components/main'
import Create from './components/create'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const useCookie = inicial => {
  const [ cookie, setCookie ] = useState(inicial)
  const logged = (datos) =>{
    setCookie(datos)
  }
  return { cookie, logged }
}

function App() {
  const { cookie, logged } = useCookie([])
  
  useEffect( () =>{
    isLogged()
  }, [])

  const isLogged = () =>{
    let url = "http://localhost:5000/"
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(respuesta => {
        logged(respuesta)
      })
  }
  
  return (
    <BrowserRouter >
        <Nav />
        <Route exact path="/" component={Main} />
        <Route path="/create"  component={Create}/>
    </BrowserRouter>
  )
}

export default App;
