import {Route, Routes} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { Navigation } from './components/Navigation';
import { ViewMove } from './pages/ViewMove';
import { Register } from './pages/Register';
import { useContext, useEffect } from 'react';
import { Context } from '.';

function App() {



  return (
    <>
    <Navigation/>
      <Routes>

        <Route path='/' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/view/:id' element={<ViewMove />} />
        <Route path='/register' element={<Register />} />
    </Routes>
   </> 
  )
}

export default App;
