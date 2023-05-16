import { FC } from 'react';

import { useMount } from '../../hooks';
import { Portal } from '../Portal/Portal';
import { ModalLayout } from './ModalLayout/ModalLayout';

export type TSimpleAnimatedModalProps = {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: FC<TSimpleAnimatedModalProps> = ({
  opened,
  onClose,
  children,
}) => {
  const { mounted } = useMount({ opened });

  if (!mounted) return null;

  return (
    <Portal>
      <ModalLayout onClose={onClose} opened={opened}>
        {children}
      </ModalLayout>
    </Portal>
  );
};
