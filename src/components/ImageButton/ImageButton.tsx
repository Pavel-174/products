import './ImageButton.scss';

interface ButtonProps {
  image: string;
  alt: string;
  func: () => void;
}

function ImageButton({ image, alt, func }: ButtonProps) {
  return (
    <button 
      className='imageButton'
      onClick={() => func()}
    >
      <img src={image} alt={alt}/>
    </button>
  );
}

export default ImageButton;