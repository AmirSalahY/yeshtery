import {ShadowView} from '@dimaportenko/react-native-shadow-view';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {imagesUri} from 'src/constants/api';

const HomeTile: React.FC<{item: any; index: number; navigation: any}> = ({
  item,
  index,
  navigation,
}) => {
  console.log(imagesUri + item.image_url);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SingleItem')}>
      <ShadowView style={styles.shadowContainer} key={index.toString()}>
        <View style={styles.tileContainer}>
          <Image
            style={styles.productImage}
            resizeMode="contain"
            source={{
              uri: 'https://api.yeshtery.com/v1/yeshtery/files/74/202492-6sl-1.jpg',
            }}
          />
          <View
            style={{
              justifyContent: 'space-between',
              marginLeft: 18,
              marginRight: 26,
              marginTop: 10,
            }}>
            <Text style={styles.tileTitle}>{item.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 42,
                  width: 79,
                  backgroundColor: '#FAFAFA',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: 6,
                }}>
                <Image
                  source={require('src/assets/images/icons/qr.png')}
                  style={{width: 30.78, height: 30.78, marginRight: 5}}
                />
                <Text
                  style={{
                    color: '#1F54CF',
                    fontFamily: 'Poppins-Regular',
                    marginRight: 6,
                  }}>
                  {item.prices.min_price}
                </Text>
              </View>
              <View
                style={{
                  height: 42,
                  width: 79,
                  backgroundColor: '#FAFAFA',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: 6,
                  marginLeft: 8,
                }}>
                <Image
                  source={require('src/assets/images/icons/frame.png')}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: undefined,
                    aspectRatio: 1,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    color: '#1F54CF',
                    fontFamily: 'Poppins-Regular',
                    marginRight: 6,
                    fontSize: 14,
                  }}>
                  {item.prices.max_price}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ShadowView>
    </TouchableOpacity>
  );
};
export default HomeTile;
const styles = StyleSheet.create({
  productImage: {
    height: 110,
    aspectRatio: 1,
    width: undefined,
    borderRadius: 8,
    overflow: 'hidden',
  },
  shadowContainer: {
    shadowColor: '#0268D3',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    margin: 8,
  },
  tileContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 11,
    paddingHorizontal: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  tileTitle: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    maxWidth: 142,
    fontSize: 16,
    lineHeight: 20,
  },
});
