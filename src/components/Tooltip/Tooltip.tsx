import './Tooltip.scss';

interface TooltipProps {
  text: string;
}

function Tooltip({ text }: TooltipProps) {
  return (
    <div className="tooltip">
      { text }
    </div>
    )
}

export default Tooltip;