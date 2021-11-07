import { FormLogin } from "../utilities/styles.js"
import {useRouter} from "next/router"
import { useState } from "react"
import {getRandomInt} from '../utilities/utilities'
import { StylesGlobal } from "../utilities/globalStyles.js"

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
    <StylesGlobal>
      <FormLogin onSubmit={Login}>
        <h1>INSIRA SUAS INFORMAÇÕES ABAIXO</h1>
        <input value={name || ''} onChange={e => setName(e.target.value)} id='nome' type='text' placeholder='Digite seu nome'></input>
        <button type='submit'>Entrar</button>
      </FormLogin>
    </StylesGlobal>
    </>   
  )
}
