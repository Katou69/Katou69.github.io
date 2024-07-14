import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [a, setA] = useState(0) 
  const [vat, setVat] = useState(0) // creating a varsetVat is a setter
  const [price, setPrice] = useState(0)
  const [gprice, setGP] = useState(0)
  // var a = 1
  function addA(){
    setA(a+1)
    console.log(a)
  }
  function handle(e){
    let p = e.target.value
    console.log(p)
    setPrice(p)
    let v = p * 0.07
    setVat(v.toFixed(2)) // changing the value
  }
  function handleDis(e){
    let d = e.target.value
    console.log(d)
    let gp = price-d
    setGP(gp)
    let v = gp * 0.07
    setVat(v.toFixed(2))
    
  }

  return (
    <>
    <label style={{fontSize: "20pt", fontFamily: "serif"}}> Price = </label>
    <input type="number" onChange={handle} style={{fontSize: "15pt" }}></input>
    <p></p>
    <label style={{fontSize: "20pt", fontFamily: "serif"}}> Discount = </label>
    <input type="number" onChange={handleDis} style={{fontSize: "15pt", color: "green"}}></input>
    
    <h2> Gross Price = {gprice} </h2>
    <h2> Vat = {vat} </h2>
    

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>A = {a}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br></br>
        <button onClick={addA}>
          Add A
        </button>
        
      </div>
      
    </>
  )
}

export default App
