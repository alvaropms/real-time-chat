import { FormLogin } from "./styles"
import { useState } from "react"
import {getRandomInt} from '../../utilities/index'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState(undefined);

  async function Login(e){
    e.preventDefault();
    try {
      if(name){
        localStorage.setItem('name', name);
        localStorage.setItem('id', getRandomInt(0,999));
        navigate('/chat');
      }else{
        alert('Digite as informações corretamente!');
      } 
    } catch (error) {
      alert('Erro ao conectar com o servidor!');
    }
  }

  return (
    <>
      <FormLogin onSubmit={Login}>
        <h1>INSIRA SUAS INFORMAÇÕES ABAIXO</h1>
        <input value={name || ''} onChange={e => setName(e.target.value)} id='nome' type='text' placeholder='Digite seu nome'></input>
        <button type='submit'>Entrar</button>
      </FormLogin>
    </>   
  )
}