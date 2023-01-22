import {Route, Routes} from 'react-router-dom'
import  AboutPage from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import  Navigation  from './components/Navigation';
import ViewMove from './pages/ViewMove';
import  Register  from './pages/Register';
import { FC, useContext, useEffect } from 'react';
import { Context } from '.';
import store from './store/store';
import UserPage from './pages/UserPage';
import { observer } from 'mobx-react-lite';

const App: FC = () => {
  const {store} = useContext(Context);
  useEffect(() => {
    store.checkAuth()
  },[])


  return (
    <>
    <Navigation/>
      <Routes>

        <Route path='/' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/view/:id' element={<ViewMove />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/register' element={<Register />} />
    </Routes>
   </> 
  )
}

export default observer(App);
