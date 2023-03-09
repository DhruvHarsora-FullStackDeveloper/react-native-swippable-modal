import React, { createRef, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import type { ScrollView } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const useSwippableModal = (
  closeThreadSoldValue: number,
  disableSwipeDown: boolean
) => {
  const scrollRef = createRef<ScrollView>();
  const [panEnabled, setPanEnabled] = useState(true);
  const [visible, setVisible] = useState(false);
  const translateY = useSharedValue(0);
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  /**
   * For control keyboard while you write something in textInput
   */
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  /**
   * reset value of animation
   */
  const resetAnimationValue = (value: number) => (translateY.value = value);

  /**
   * event handling function which gets gesture events of pan
   * apply logic of swipe down to close modal
   */
  const eventHandler = useAnimatedGestureHandler({
    onStart: (_event, _ctx) => {
      translateY.value = 0;
    },
    onActive: (event, _ctx) => {
      if (!keyboardShow) {
        if (event.translationY > 0) {
          translateY.value = event.translationY;
          if (event.translationY > closeThreadSoldValue) {
            runOnJS(setVisible)(false);
            runOnJS(resetAnimationValue)(0);
          }
        }
      }
    },
    onEnd: (event, _ctx) => {
      if (event.translationY > 0 && event.translationY < closeThreadSoldValue) {
        translateY.value = 0;
      }
    },
  });

  const modalDownStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  /**
   * handled disable swipe
   */
  useEffect(() => {
    disableSwipeDown ? setPanEnabled(false) : setPanEnabled(true);
  }, [disableSwipeDown]);

  return {
    translateY,
    setVisible,
    visible,
    panEnabled,
    scrollRef,
    eventHandler,
    modalDownStyles,
    setPanEnabled,
  };
};

export default useSwippableModal;
