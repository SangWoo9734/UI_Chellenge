import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
}

const MordalPortal: React.FC<Props> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return createPortal(children, document.querySelector('#portal') as Element);
};

export default MordalPortal;
