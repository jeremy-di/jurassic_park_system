import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from '@/pages/publicPages/PublicRouter';
import DinoRouter from '@/pages/dinosaurs/DinoRouter';
import PaddockRouter from '@/pages/paddocks/PaddockRouter';
import UserRouter from '@/pages/users/UserRouter';
import Gardien from '@/_helpers/Gardien';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/ingen/*" element={<Gardien><DinoRouter /></Gardien>} />
        <Route path="/paddocks/*" element={<Gardien><PaddockRouter /></Gardien>} />
        <Route path="/users/*" element={<Gardien><UserRouter /></Gardien>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
