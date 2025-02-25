import './ProductCreator.scss';
import MainHeader from '../../components/MainHeader/MainHeader';
import ProductsForm from '../../components/ProductsForm/ProductsForm';

function ProductCreator() {
  return (
    <div className='productCreator'>
      <MainHeader text={"Создание типа продукции"} />
      <ProductsForm formType={'create'}/>
    </div>
  );
}

export default ProductCreator;