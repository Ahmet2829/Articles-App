import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default router