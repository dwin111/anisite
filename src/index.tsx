import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ModalState } from './context/Modalcontext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface State {
  store: Store;
}
const store = new Store();

export const Context = createContext<State >({
    store,
});
 
root.render(
  <Context.Provider value={ {
    store 
  }}>
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
  </Context.Provider>
);

