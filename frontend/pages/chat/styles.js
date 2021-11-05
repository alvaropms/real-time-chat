import styled from 'styled-components'

export const Messages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${ (props) => props.Position == 'end' ? "flex-end" : "flex-start"};
`;

export const StyledP = styled.p`
    background-color: ${ (props) => props.Color == 'end' ? "green" : "aqua"};
    padding: 10px;
    border-radius: 15px;
    min-width: 15%;
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: ${ (props) => props.Color == 'end' ? "flex-end" : "flex-start"};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 10px;
    height: 100%;
    width: 400px;
    overflow-y: scroll;

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
`;