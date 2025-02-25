import './ProductRedactor.scss';
import MainHeader from '../../components/MainHeader/MainHeader';
import ProductsForm from '../../components/ProductsForm/ProductsForm';

function ProductRedactor() {
  return (
    <div className='productRedactor'>
      <MainHeader text={"Создание типа продукции"} />
      <ProductsForm formType={'redact'}/>
    </div>
  );
}

export default ProductRedactor;