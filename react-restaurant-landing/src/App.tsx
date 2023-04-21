import { useState } from 'react'
import Header from './components/Header'
import AppRouter from './routers/AppRouter'
import "./styles/index.scss";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App
