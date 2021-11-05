import { FormLogin } from "./styles"
import {useRouter} from "next/router"
import { useState } from "react"
import {getRandomInt} from '../utilities/utilities'

export default function Login() {
  const [name, setName] = useState(undefined);
  const router = useRouter();

  async function Login(e){
    e.preventDefault();
    try {
      if(name){
        localStorage.setItem('name', name);
        localStorage.setItem('id', getRandomInt(0,999));
        router.push('/chat');
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
      <h1>Insira suas informações abaixo</h1>
      <input value={name || ''} onChange={e => setName(e.target.value)} id='nome' type='text' placeholder='Digite seu nome'></input>
      <button type='submit'>Entrar</button>
    </FormLogin>
    </>   
  )
}
