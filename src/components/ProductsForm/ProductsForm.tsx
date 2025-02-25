/* eslint-disable react/style-prop-object */
import { useState } from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import './ProductsForm.scss'

interface FormProps {
    formType: string;
}

function ProductsForm({ formType } : FormProps) {
  const navigate = useNavigate();
  const [packsNumber, setPacksNumber] = useState<string>('');
  const [packageType, setPackageType] = useState<string>('');
  const [isArchived, setIsArchived] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');

  return (
    <form className="productsForm">
        <div className="formGroup">
            <label htmlFor="packsNumber">Кол-во пачек *</label>
            <input
                type="number"
                id="packsNumber"
                value={packsNumber}
                onChange={(e) => setPacksNumber(e.target.value)}
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
            {formType === 'redact' && <Button text={'Удалить'} style={'red'} func={() => {}}/>}
            <Button text={'Отмена'} style={'black'} func={() => {navigate('/')}}/>
            <Button text={'Сохранить'} style={'yellow'} func={() => {}}/>
        </div>
    </form>
  );
}

export default ProductsForm;