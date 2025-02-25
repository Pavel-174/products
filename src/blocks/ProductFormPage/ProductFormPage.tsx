import './ProductFormPage.scss';
import MainHeader from '../../components/MainHeader/MainHeader';
import ProductsForm from '../../components/ProductsForm/ProductsForm';

interface FormProps {
  formType: string;
}

function ProductFormPage({ formType } : FormProps) {
  return (
    <div className='productFormPage'>
      <MainHeader text={formType === 'create' ? "Создание типа продукции" : "Создание типа продукции"} />
      <ProductsForm formType={ formType }/>
    </div>
  );
}

export default ProductFormPage;