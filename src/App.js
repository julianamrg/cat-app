import './App.css';
import { CatsList} from './components/CatsList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AddCat } from './components/AddCat';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {
  return (

  <Provider store={store}>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<CatsList/>}/>
        <Route path='/add-cat' element={<AddCat/>}/>
            
        
      </Routes>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
