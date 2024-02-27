import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserLayout from '@/pages/users/UserLayout';

const UserRouter = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="list" element={<UserList />} />
            </Route>
        </Routes>
    );
};

export default UserRouter;