import './Button.scss';

interface ButtonProps {
  text: string;
  style: string;
  func: () => void;
}

function Button({ text, style, func }: ButtonProps) {
  return (
    <button 
      className={style}
      onClick={() => func()}
    >
      {text}
    </button>
  );
}

export default Button;