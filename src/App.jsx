import { useState } from 'react'
import Banner from './componentes/Banner'
import  Formulario  from './componentes/Formulario'
import Time from './componentes/Time'
import Rodape from './componentes/rodape'

function App() {


 const times = [
    {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
},
{
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
},
{
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
},
{
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
},
{
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
},
{
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
}
]
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado =
  
    (colaborador) => {
      // debugger
      setColaboradores([...colaboradores, colaborador])
    } 

  return (
    <>
      <Banner />
      
      <Formulario times={times.map(time => time.nome )} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

    
      {times.map(times => <Time 
      key={times.nome} 
      nome={times.nome} 
      corPrimaria={times.corPrimaria} 
      corSecundaria={times.corSecundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome )}
      />
      )}
      <Rodape />
      
      
    </>
  )
}

export default App
