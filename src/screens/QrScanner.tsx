import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {MainStackParamList} from 'src/navigation/MainStack';
const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  return (
    <View style={headerStyle.mainContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={headerStyle.contentContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('src/assets/images/icons/blackArrow.png')}
            style={headerStyle.leftIcon}
          />
        </TouchableOpacity>
        <Text style={headerStyle.screenTitle}>scan code</Text>
      </View>
    </View>
  );
};
const QrScanner = () => {
  const [torch, setTorch] = useState<'off' | 'torch'>('off');
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const onSuccess = (e: any) => {
    // Pass and merge params back to home screen
    navigation.navigate({
      name: 'SingleItem',
      params: {scan: e.data},
      merge: true,
    });
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode[torch]}
        showMarker={true}
        customMarker={
          <View
            style={{
              width: 194,
              height: 194,
              flexDirection: 'row',
            }}>
            <View style={{justifyContent: 'space-between', flex: 1}}>
              <Image
                source={require('src/assets/images/icons/scannerCorner.png')}
                style={{width: 37, height: 35}}
                resizeMode="contain"
              />
              <Image
                source={require('src/assets/images/icons/scannerCorner.png')}
                style={{
                  width: 37,
                  height: 35,
                  transform: [{rotateX: '180deg'}],
                }}
                resizeMode="contain"
              />
            </View>
            <View style={{justifyContent: 'space-between'}}>
              <Image
                source={require('src/assets/images/icons/scannerCorner.png')}
                style={{
                  width: 37,
                  height: 35,
                  transform: [{rotateY: '180deg'}],
                }}
                resizeMode="contain"
              />
              <Image
                source={require('src/assets/images/icons/scannerCorner.png')}
                style={{
                  width: 37,
                  height: 35,
                  transform: [{rotateZ: '180deg'}],
                }}
                resizeMode="contain"
              />
            </View>
          </View>
        }
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => {
              setTorch(state => (state === 'off' ? 'torch' : 'off'));
            }}>
            <Image
              source={require('src/assets/images/icons/light.png')}
              style={styles.torch}
            />
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    marginBottom: 40,
  },
  torch: {
    width: 100,
    height: 100,
  },
  page: {flex: 1, paddingTop: 26},
});
const headerStyle = StyleSheet.create({
  screenTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    lineHeight: 24,
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
  },
  leftIcon: {marginRight: 23.09},
  mainContainer: {
    height: 65,
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 20,
    left: 26.16,
  },
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
});
export default QrScanner;
