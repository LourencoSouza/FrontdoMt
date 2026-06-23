import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import AppRoutes from "./AppRoutes";
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="tudo">
        <div className="button"
        onClick={() => navigate('/select')}>
          
        </div>
      </div>
    </>
  )
}

export default App
