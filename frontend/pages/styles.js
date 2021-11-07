import styled from 'styled-components';

const def = 0;
export default def;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;

    input{
        margin-bottom: 4px;
        padding: 5px;
        width: 200px;

        border: 2px solid var(--darken-blue);
        :focus{
            border-color: var(--blue);
            outline: none;
        }
    }
    button{
        width: 200px;
        padding: 5px;
    }
`;