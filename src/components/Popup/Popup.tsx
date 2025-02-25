/* eslint-disable react/style-prop-object */
import './Popup.scss';
import Button from '../Button/Button';

interface PopupProps {
  funcDelete: () => void;
  funcBack: () => void;
}

function Popup({ funcDelete, funcBack }: PopupProps) {
  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <h2>Удалить продукцию?</h2>
        <div className='popupButtons'>
          <Button
            text={"Удалить"}
            style={"red"}
            func={ funcDelete }
          />
          <Button
            text={ "Отмена" }
            style={"black"}
            func={ funcBack }
          />
        </div>
      </div>
    </div>
  );
}

export default Popup;