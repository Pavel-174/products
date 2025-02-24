import './App.scss';
import { Route, Routes } from 'react-router-dom'
import ProductList from './blocks/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductList />}/>
        {/* <Route />
        <Route /> */}
      </Routes>
    </div>
  );
}

export default App;
