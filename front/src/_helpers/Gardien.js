import React from 'react';
import { Navigate } from 'react-router-dom';
import { userService } from '@/_services/user.service';

const Gardien = ({children}) => {
    if (!userService.isLogged()) {
        return <Navigate to="/login" />
    }

    return children
};

export default Gardien;