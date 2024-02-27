import React from 'react';
import PaddockLayout from '../../pages/paddocks/PaddockLayout';
import PaddockNew from '@/pages/paddocks/PaddockNew'
import PaddockList from '@/pages/paddocks/PaddockList'
import PaddockSingle from '@/pages/paddocks/PaddockSingle'
import PaddockUpdate from '@/pages/paddocks/PaddockUpdate'
import PaddockDelete from '@/pages/paddocks/PaddockDelete'
import { Route, Routes } from 'react-router-dom';

const PaddockRouter = () => {
    return (
        <Routes>
            <Route element={<PaddockLayout />}>
                <Route path="new" element={<PaddockNew />} />
                <Route path="list" element={<PaddockList />} />
                <Route path="single/:_id" element={<PaddockSingle />} />
                <Route path="update/:_id" element={<PaddockUpdate />} />
                <Route path="delete/:_id" element={<PaddockDelete />} />
            </Route>
        </Routes>
    );
};

export default PaddockRouter;