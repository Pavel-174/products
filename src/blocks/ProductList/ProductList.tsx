/* eslint-disable react/style-prop-object */
import { useEffect, useState } from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import Button from '../../components/Button/Button';
import ImageButton from '../../components/ImageButton/ImageButton';
import Popup from '../../components/Popup/Popup';
import Tooltip from '../../components/Tooltip/Tooltip';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../api/api';
import { timestampToDate } from '../../utils/support';
import { setProducts } from '../../redux/products/products';
import './ProductList.scss';
import bin from '../../images/bin.png';
import info from '../../images/info.png';
import edit from '../../images/edit.png';
import { Product } from '../../types/types';


function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { products } = useSelector((state: any) => state.products);

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const openDeletePopup = (id: string) => {
    setIsPopupOpen(true);
    setId(id);
  }

  const closeDeletePopup = () => {
    setIsPopupOpen(false);
    setId('');
  }

  const openTooltip = (id: string) => {
    setIsTooltipVisible(true);
    setId(id);
  }

  const closeTooltip = () => {
    setIsTooltipVisible(false);
    setId('');
  }

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    dispatch(setProducts(products.filter((product: { id: string; }) => product.id !== id)));
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
                  products.map((product: Product, index: string) => (
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
                        <ImageButton image={info} alt={'Информация'} func={() => {isTooltipVisible === true ? closeTooltip() : openTooltip(product.id)}} />
                        {(isTooltipVisible === true && id === product.id) && <Tooltip text={product.description ? product.description : 'Нет информации'}/>}
                      </td>
                      <td>
                        <div className='buttonBox'>
                          <ImageButton image={edit} alt={'Редактировать'} func={() => navigate(`/edit/${product.id}`)} />
                          <ImageButton image={bin} alt={'Удалить'} func={() => openDeletePopup(product.id)} />
                          {/*  */}
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
        {isPopupOpen === true && <Popup funcDelete={() => handleDelete(id)} funcBack={() => closeDeletePopup()}/>}
    </div>
  );
}

export default ProductList;
