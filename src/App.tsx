import './App.scss';
import { Route, Routes } from 'react-router-dom'
import ProductList from './blocks/ProductList/ProductList';
import ProductCreator from './blocks/ProductCreator/ProductCreator';
import ProductRedactor from './blocks/ProductRedactor/ProductRedactor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/create' element={<ProductCreator />}/>
        <Route path='/edit/:id' element={<ProductRedactor />}/>
      </Routes>
    </div>
  );
}

export default App;
