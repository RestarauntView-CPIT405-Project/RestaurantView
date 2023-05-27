import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BestRatings from './pages/BestRatings';
import Client_Validation from './pages/Client_Validation';

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="reviewpage" element={<ReviewPage />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="bestratings" element={<BestRatings />}></Route>
          <Route path="Client_Validation" element={<Client_Validation />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

