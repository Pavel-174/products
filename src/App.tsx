import './App.scss';
import { Route, Routes } from 'react-router-dom'
import ProductList from './blocks/ProductList/ProductList';
import ProductCreator from './blocks/ProductCreator/ProductCreator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/create' element={<ProductCreator formType={'create'}/>}/>
        <Route path='/edit/:id' element={<ProductCreator formType={'redact'}/>}/>
      </Routes>
    </div>
  );
}

export default App;
