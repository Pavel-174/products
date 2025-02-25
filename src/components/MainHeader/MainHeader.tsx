import './MainHeader.scss';

interface ButtonProps {
  text: string;
}

function MainHeader({ text }: ButtonProps) {
  return (
    <h1 className='header'>{ text }</h1>
  );
}

export default MainHeader;