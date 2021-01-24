import React, { useState, useEffect } from 'react'
import Notlogged from './notlogged'

const useCookie = inicial => {
    const [ cookie, setCookie ] = useState(inicial)
    const logged = (datos) =>{
      setCookie(datos)
    }
    return { cookie, logged }
}

const Main = () => {
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

    return(
        <div className="container">
            { cookie['cookie'] == null ? <Notlogged /> : <div>CONECTADO</div> }
        </div>
    )
}
export default Main;