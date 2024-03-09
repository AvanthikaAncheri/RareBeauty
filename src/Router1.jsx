import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Section2 from './Section2'
import Section3 from './Section3'

function Router1() {
  return (
    <div>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={
            <>
            <Header/>
           <Main/>
           <Section2/>
           <Section3/>
            </>
        }/>
        <Route path='/rare-impact' element={<>
         <Header/>
        </>}/>
       </Routes>
       </BrowserRouter> 
    </div>
  )
}

export default Router1