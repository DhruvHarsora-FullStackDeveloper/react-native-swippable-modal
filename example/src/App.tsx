import React, { createRef, useState } from 'react';
import { Image, LogBox, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
  panRef,
  SwippableModal,
  SwippableModalRefType,
} from 'react-native-swippable-modal';
import assets from './assets';
import { CustomTextInput } from './component';
import { constantsData } from './constants';
import styles from './styles';

const swippableModalRef = createRef<SwippableModalRefType>();

LogBox.ignoreAllLogs();

const App = () => {
  const [showFlatList, setShowFlatList] = useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.innerContainer}>
        <View style={styles.bannerContainer}>
          <Image
            source={assets.banner}
            style={styles.image}
            resizeMode={'stretch'}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => swippableModalRef.current?.show()}>
          <Text style={styles.showModalText}>Show Modal</Text>
        </TouchableOpacity>

        <SwippableModal ref={swippableModalRef} closeThreadSoldValue={100}>
          <CustomTextInput placeHolder="Enter library name" />
          <CustomTextInput placeHolder="Enter package name" />
          <CustomTextInput placeHolder="Enter version code" />

          <TouchableOpacity
            style={styles.showFlatListButton}
            onPress={() => setShowFlatList(!showFlatList)}>
            <Image
              source={showFlatList ? assets.checked : assets.unchecked}
              style={styles.checkedImage}
            />
            <Text style={styles.textFlatList}>Show FlatList</Text>
          </TouchableOpacity>

          {showFlatList && (
            <>
              <FlatList
                data={constantsData}
                renderItem={({ item }) => (
                  <View style={styles.renderItemView}>
                    <Image
                      style={styles.image}
                      source={item.images}
                      resizeMode={'stretch'}
                    />
                  </View>
                )}
                horizontal
                keyExtractor={({ id }) => id.toString()}
              />
              <View style={styles.verticalFlatList}>
                <Text style={styles.verticalListText}>Vertical List</Text>
                <FlatList
                  data={constantsData}
                  simultaneousHandlers={panRef}
                  renderItem={({ item }) => (
                    <View style={styles.renderVerticalItemView}>
                      <Image
                        style={styles.image}
                        source={item.images}
                        resizeMode={'stretch'}
                      />
                    </View>
                  )}
                  keyExtractor={({ id }) => id.toString()}
                />
              </View>
            </>
          )}
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </SwippableModal>
      </View>
    </View>
  );
};

export default App;
