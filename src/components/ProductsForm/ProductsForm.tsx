/* eslint-disable react/style-prop-object */
import { useState } from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteProduct, createProduct } from '../../api/api';
import { Product } from '../../types/types';
import Popup from '../Popup/Popup';
import './ProductsForm.scss'

interface FormProps {
    formType: string;
}

function ProductsForm({ formType } : FormProps) {
  const navigate = useNavigate();

  const { productInfo } = useSelector((state: any) => state.productInfo);

  const [packsNumber, setPacksNumber] = useState<number>(formType === 'redact' ? productInfo.packsNumber : '');
  const [packageType, setPackageType] = useState<string>(formType === 'redact' ? productInfo.packageType : '');
  const [isArchived, setIsArchived] = useState<boolean>(formType === 'redact' ? productInfo.isArchived : false);
  const [description, setDescription] = useState<string>(formType === 'redact' ? productInfo.description : '');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleDelete = async () => {
    await deleteProduct(productInfo.id);
    navigate('/');
  }

  const handlePacksNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const numberValue = value === '' ? 0 : parseInt(value, 10);
    setPacksNumber(numberValue);
  };

  const handleCreate = async () => {
    const productData: Product = {
        packsNumber,
        packageType,
        isArchived,
        description,
    }
    await createProduct(productData);
    navigate('/');
  }

  return (
    <form className="productsForm">
        <div className="formGroup">
            <label htmlFor="packsNumber">Кол-во пачек *</label>
            <input
                type="number"
                id="packsNumber"
                value={packsNumber}
                onChange={handlePacksNumberChange}
                required
            />
        </div>

        <div className="formGroup">
            <label htmlFor="packageType">Тип упаковки *</label>
            <input
                type="text"
                id="packageType"
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                required
            />
        </div>

        <div className="formGroup">
            <label htmlFor="isArchived">Архивировано</label>
            <input
                type="checkbox"
                id="isArchived"
                checked={isArchived}
                onChange={(e) => setIsArchived(e.target.checked)}
            />
        </div>

        <div className="formGroup">
            <label htmlFor="description">Описание</label>
            <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
            />
        </div>

        <div className={`buttonBox ${formType === 'redact' ? 'buttonBoxRedact' : 'buttonBoxCreate'}`}>
            {formType === 'redact' && <Button text={'Удалить'} style={'red'} func={() => setIsPopupOpen(true)}/>}
            <Button text={'Отмена'} style={'black'} func={() => {navigate('/')}}/>
            <Button text={'Сохранить'} style={'yellow'} func={() => {handleCreate()}}/>
        </div>
        {isPopupOpen === true && <Popup funcDelete={() => handleDelete()} funcBack={() => setIsPopupOpen(false)}/>}
    </form>
  );
}

export default ProductsForm;