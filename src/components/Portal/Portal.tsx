import ReactDOM from 'react-dom';
import { FC, useEffect, useState } from 'react';

export type TPortalProps = {
  children: React.ReactNode
}

export const Portal: FC<TPortalProps> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};