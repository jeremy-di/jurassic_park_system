import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DinoLayout from '@/pages/dinosaurs/DinoLayout';
import DinosaurNew from '@/pages/dinosaurs/DinosaurNew'
import DinosaurList from '@/pages/dinosaurs/DinosaurList'
import DinosaurSingle from '@/pages/dinosaurs/DinosaurSingle'
import DinosaurUpdate from '@/pages/dinosaurs/DinosaurUpdate'
import DinosaurDelete from '@/pages/dinosaurs/DinosaurDelete'

const DinoRouter = () => {
    return (
        <Routes>
            <Route element={<DinoLayout />}>
                <Route path="new" element={<DinosaurNew />} />
                <Route path="list" element={<DinosaurList />} />
                <Route path="single/:_id" element={<DinosaurSingle />} />
                <Route path="update/:_id" element={<DinosaurUpdate />} />
                <Route path="delete/:_id" element={<DinosaurDelete />} />
            </Route>
        </Routes>
    );
};

export default DinoRouter;