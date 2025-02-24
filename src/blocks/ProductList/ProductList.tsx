import MainHeader from '../../components/MainHeader/MainHeader';
import Button from '../../components/Button/Button';
import './ProductList.scss';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const navigate = useNavigate();

  return (
    <div className='productBox'>
        <div className='headerBox'>
            <MainHeader text={"Список выпускаемой продукции"} />
            <Button 
                text={'Создать тип продукции'} 
                style={'yellow'} 
                func={() => navigate('/create')}
            />
        </div>
    </div>
  );
}

export default ProductList;
