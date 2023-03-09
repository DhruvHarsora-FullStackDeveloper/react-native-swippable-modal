import type React from 'react';
import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { PanGestureHandlerProps } from 'react-native-gesture-handler';

export interface SwippableModalProps {
  children: ReactNode;
  modalStyle: StyleProp<ViewStyle>;
  modalBackgroundColor: {
    backgroundColor: string;
  };
  disableLine: boolean;
  modalInnerContainerStyle: StyleProp<ViewStyle>;
  disableClose: boolean;
  disableBackgroundColor: boolean;
  disableSwipeDown: boolean;
  closeThreadSoldValue: number;
  panGestureProps: PanGestureHandlerProps;
  modalContainerStyle: StyleProp<ViewStyle>;
  modalLineStyle: StyleProp<ViewStyle>;
}

export interface SwippableModalRefType {
  show: () => Promise<void>;
  hide: () => Promise<void>;
}

export interface ModalPropsType {
  children?: React.ReactNode;
}
