import React, { createRef, forwardRef, useImperativeHandle } from 'react';
import {
  KeyboardAvoidingView,
  Modal as RNModal,
  ModalProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Constants } from '../../constants';
import { globalMetrics } from '../../theme';
import { useSwippableModal } from './hooks';
import styles from './styles/SwippableModalStyles';
import type { SwippableModalProps, SwippableModalRefType } from './types';

export const modalRef = createRef<SwippableModalRefType>();

/**
 * functions are used for show and hide modal directly
 */
export const showModal = () => modalRef?.current?.show();
export const hideModal = () => modalRef?.current?.hide();

type Props = Partial<SwippableModalProps> & ModalProps;
const { isAndroid } = globalMetrics;
export const panRef = createRef();

const SwippableModal = forwardRef<SwippableModalRefType, Props>(
  (
    {
      children,
      modalStyle,
      modalBackgroundColor,
      disableLine,
      modalInnerContainerStyle,
      disableClose,
      disableBackgroundColor,
      disableSwipeDown = false,
      closeThreadSoldValue = Constants.MODAL_CLOSE_THRESHOLD,
      panGestureProps,
      modalContainerStyle,
      modalLineStyle,
      ...rest
    },
    ref
  ) => {
    const {
      translateY,
      setVisible,
      visible,
      panEnabled,
      scrollRef,
      eventHandler,
      modalDownStyles,
      setPanEnabled,
    } = useSwippableModal(closeThreadSoldValue, disableSwipeDown);

    /**
     * reference use for opening modal
     */
    useImperativeHandle(ref ?? modalRef, () => ({
      show: () => {
        setVisible(true);
        translateY.value = 0;
        return Promise.resolve();
      },
      hide: () => {
        setVisible(false);
        translateY.value = 0;
        return Promise.resolve();
      },
    }));

    const keyBoardBehavior = !isAndroid ? 'padding' : undefined;

    return (
      <RNModal
        visible={visible}
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => setVisible(false)}
        {...rest}>
        <View
          style={[
            styles.inputContainer,
            modalStyle,
            disableBackgroundColor && styles.inputContainerBackgroundColor,
          ]}>
          <TouchableOpacity
            style={styles.touchableOpacityStyle}
            onPressOut={() => !disableClose && setVisible(false)}
          />

          <KeyboardAvoidingView behavior={keyBoardBehavior}>
            <GestureHandlerRootView>
              <PanGestureHandler
                enabled={panEnabled}
                ref={panRef}
                simultaneousHandlers={scrollRef}
                onGestureEvent={eventHandler}
                {...{ panGestureProps }}>
                <Animated.View
                  style={[
                    styles.keyboardAvoidingStyle,
                    modalBackgroundColor,
                    modalDownStyles,
                  ]}>
                  <ScrollView
                    ref={scrollRef}
                    simultaneousHandlers={panRef}
                    contentContainerStyle={styles.scrollViewStyle}
                    nestedScrollEnabled
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    onScrollEndDrag={event =>
                      !disableSwipeDown &&
                      setPanEnabled(event.nativeEvent.contentOffset.y <= 0)
                    }
                    scrollEventThrottle={16}>
                    <View>
                      <View style={[styles.bodyContainer, modalContainerStyle]}>
                        {!disableLine && (
                          <View
                            style={[styles.modalLineStyle, modalLineStyle]}
                          />
                        )}
                        <View
                          style={[
                            styles.bodyContainerHeader,
                            disableLine && styles.bodyContainerHeaderDisable,
                            modalInnerContainerStyle,
                          ]}>
                          {children}
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </Animated.View>
              </PanGestureHandler>
            </GestureHandlerRootView>
          </KeyboardAvoidingView>
        </View>
      </RNModal>
    );
  }
);

export default SwippableModal;
