import styled from 'styled-components'

export const Messages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${ (props) => props.Position == 'end' ? "flex-end" : "flex-start"};
`;

export const StyledP = styled.p`
    background-color: ${ (props) => props.Color == 'end' ? "var(--darken-blue)" : "var(--darken-gray)"};
    padding: 10px;
    border-radius: 20px;
    min-width: 15%;
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: ${ (props) => props.Color == 'end' ? "flex-end" : "flex-start"};
    word-break: break-all;
    color: var(--white);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    height: 100%;
    width: var(--width-chat);
    overflow-y: scroll;
    background-color: var(--gray);
    -webkit-box-shadow: 0px 1px 22px -5px var(--black); 
    box-shadow: 0px 1px 22px -5px var(--black);

    @media (max-width: 500px){
        width: 90%;
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    width: var(--width-chat);
`;

export const StyledInput = styled.input`
    padding: 5px;
    font-size: 1rem;
    border: 2px solid var(--darken-blue);
    width: 80%;

    :focus{
        border-color: var(--blue);
        outline: none;
    }
`;

export const StyledButton = styled.button`
    width: 20%;
`;