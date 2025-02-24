/* eslint-disable react/style-prop-object */
import { useEffect } from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import Button from '../../components/Button/Button';
import ImageButton from '../../components/ImageButton/ImageButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../api/api';
import { timestampToDate } from '../../utils/support';
import './ProductList.scss';
import bin from '../../images/bin.png';
import info from '../../images/info.png';
import edit from '../../images/edit.png'


function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { products } = useSelector((state: any) => state.products);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const handleDelete = (id: string) => {

  }

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
        <div className='productTable'>
          <table>
              <thead>
                  <tr>
                      <th>
                        <span>№</span>
                      </th>
                      <th>
                        <span>Кол-во пачек</span>
                      </th>
                      <th>
                        <span>Тип упаковки</span>
                      </th>
                      <th>
                        <span>Дата создания</span>
                      </th>
                      <th>
                        <span>Статус</span>
                      </th>
                      <th> </th>
                      <th> </th>
                  </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product: any, index: string) => (
                    <tr key={product.id}>
                      <td>
                        <span>{index + 1}</span>
                      </td>
                      <td>
                        <span>{product.packsNumber}</span>
                      </td>
                      <td>
                        <span>{product.packageType}</span>
                      </td>
                      <td>
                        <span>{timestampToDate(product.createdAt)}</span>
                      </td>
                      <td>
                        <span>{product.isArchived === true ? "Архив" : "Активно"}</span>
                      </td>
                      <td>
                        <ImageButton image={info} alt={'Информация'} func={() => {}} />
                      </td>
                      <td>
                        <div className='buttonBox'>
                          <ImageButton image={edit} alt={'Редактировать'} func={() => navigate(`/edit/${product.id}`)} />
                          <ImageButton image={bin} alt={'Удалить'} func={() => handleDelete(product.id)} />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7}>Нет доступных продуктов</td>
                  </tr>
                )}
              </tbody>
          </table>
        </div>
    </div>
  );
}

export default ProductList;
