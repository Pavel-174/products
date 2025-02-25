import './App.scss';
import { Route, Routes } from 'react-router-dom'
import ProductList from './blocks/ProductList/ProductList';
import ProductFormPage from './blocks/ProductFormPage/ProductFormPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/create' element={<ProductFormPage formType={'create'}/>}/>
        <Route path='/edit/:id' element={<ProductFormPage formType={'redact'}/>}/>
      </Routes>
    </div>
  );
}

export default App;
