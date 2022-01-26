import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login/index';
import Chat from './pages/chat/index';
import {GlobalStyles} from './globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <>
  <GlobalStyles/>
  <BrowserRouter>
        <Routes>
            <Route path="/" exact={true} element={<Login/>} />
            <Route path="/chat" element={<Chat/>} />
        </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
