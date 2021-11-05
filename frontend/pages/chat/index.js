import { Messages, Container, Main, Form, StyledP } from "./styles"
import {useState, useEffect } from "react"
import connection from '../../utilities/connection'

export default function Chat(){
    const [message, setMessage] = useState();
    const {messages, sendMessage, listenMessage} = connection();

    useEffect(() => {
        listenMessage();
    }, [messages, sendMessage, listenMessage])
    
    async function handleSendMessage(e){
        e.preventDefault();
        try {
            const name = localStorage.getItem('name') || 'inválido';
            const id = localStorage.getItem('id') || 0;
            sendMessage({name: name, message: message, id: id})
            setMessage('');
        } catch (error) {
            console.log(error);
            alert('Erro ao enviar mensagem!');
        }
    }

    function checkId(e){
        if(e == localStorage.getItem('id')){
            return 'end'
        }else{
            return 'start'
        }
    }

    return(
        <>
        <Main>
            <h1>Chat:</h1>
            <Container>
                {messages.map((e, i) => (
                    <Messages Position={checkId(e.id)} key={i}>
                        <StyledP Color={checkId(e.id)}>
                            <strong>{e.name}</strong>
                            <span>{e.message}</span>
                        </StyledP>
                    </Messages>
                    )  
                )}
            </Container>
            <Form>
                <input value={message || ''} onChange={ e => setMessage(e.target.value)} type='text' placeholder='Digite sua mensagem'></input>
                <button type='submit' onClick={handleSendMessage}>Enviar</button>
            </Form>
        </Main>
        </>
    )
}