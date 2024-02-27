import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from '@/pages/publicPages/PublicLayout';
import Home from '@/pages/publicPages/Home'
import Register from '@/pages/publicPages/Register'
import Login from '@/pages/publicPages/Login'
import Error404 from '@/_utils/Error404'

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;