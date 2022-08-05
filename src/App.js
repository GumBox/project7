import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';






export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path='/home' element={<Home />} />


            </Routes>

        </BrowserRouter>
    );
}
