import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ArticlesInto from '../pages/ArticlesInto/ArticlesInto';
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';




const AppRouter = ({ articlesData, userData }) => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='Profile/:id' element={<Profile />} />
                    <Route path="ArticlesInto/:id" element={<ArticlesInto />} />
                    <Route path="ArticlesPage" element={<ArticlesPage articlesData={articlesData} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter