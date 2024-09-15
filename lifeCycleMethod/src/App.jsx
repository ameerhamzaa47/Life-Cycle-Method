import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstLifeCycle from './LifeCycleComponent/First life cycle method'
import Renderlifecyclemethod from './LifeCycleComponent/Render life cycle method'
import ComponentDidMount from './LifeCycleComponent/ComponentDidMount'
import ShouldComponentUpdate from './LifeCycleComponent/ShouldComponentUpdate'
import ComponentWillUnmount from './LifeCycleComponent/ComponentWillUnmount'



function App() {
  let [name,setname]=useState("Hamza")

  return (
    <div>
      <h1>Hamza</h1>
      <FirstLifeCycle/>
      <Renderlifecyclemethod name={name}/>
      <button onClick={()=>setname("M Hamza")}>update</button>
      <ComponentDidMount/>
      <ShouldComponentUpdate/>
      <ComponentWillUnmount/>
    </div>
  )
}

export default App
