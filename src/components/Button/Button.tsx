import './Button.scss';

interface ButtonProps {
  text: string;
  style: string;
  func: () => void;
}

function Button({ text, style, func }: ButtonProps) {
  return (
    <button 
      className={`button ${style}`}
      onClick={() => func()}
      type='button'
    >
      { text }
    </button>
  );
}

export default Button;