import { useState } from 'react'

import Banner from './componentes/Banner'
import CampoTexto from './componentes/CampoTexto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <CampoTexto />
      
    </>
  )
}

export default App
