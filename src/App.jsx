// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './team'
import Users from './Users'
import Friends from './Friends'

function App() {
 function handleClick(){
alert('button clicked')
 }
 const handleClick2 = ()=>{
  alert('buttn 2 clicked')
 }
const fourthClick=(num)=>{
  alert(num+5)
}

  return (
    <>
     
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
     <button onClick={handleClick}>Click me </button>
    <button onClick={handleClick2}>click me 2</button>
    <button onClick={ ()=> alert('third button clicked')}>click me 3</button>
    <button onClick={()=>fourthClick(5)}>click me 4</button>
    </>
  )
}

export default App
