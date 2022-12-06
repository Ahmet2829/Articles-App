import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ArticlesPage from '../pages/ArticlesPage';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Subject from '../pages/Subject';




const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Profile" element={<Profile />} />
                    <Route path="Subject" element={<Subject />} />
                    <Route path="ArticlesPage" element={<ArticlesPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter