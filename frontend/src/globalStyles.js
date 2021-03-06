import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
::-webkit-scrollbar-thumb {
    background: #888; 
}
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
*{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;

    --width-chat: 400px;

    --white: #f1f1f1;
    --gray: rgb(160, 158, 158);
    --darken-gray: #555;
    --blue: rgb(0, 182, 182);
    --darken-blue: rgb(0, 100, 167);
    --black: rgb(29, 28, 28);
}
`;