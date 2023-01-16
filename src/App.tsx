import {Route, Routes} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { Navigation } from './components/Navigation';
import { ViewMove } from './pages/ViewMove';

function App() {
  return (
    <>
    <Navigation/>
      <Routes>

        <Route path='/' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/view/:id' element={<ViewMove />} />
    </Routes>
   </> 
  )
}

export default App;
