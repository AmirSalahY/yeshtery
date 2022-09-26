import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwiperFlatList, {
  Pagination,
  PaginationProps,
} from 'react-native-swiper-flatlist';
import RadioColor from 'src/components/RadioColor';
import RadioSize from 'src/components/RadioSize';
import {MainStackParamList} from 'src/navigation/MainStack';
const {width} = Dimensions.get('window');

const paginationStyle = StyleSheet.create({
  paginationContainer: {
    bottom: -40,
  },
  pagination: {
    borderRadius: 3,
    marginHorizontal: 2,
    width: 6,
    height: 6,
  },
  activeItem: {width: 30},
});

export const CustomPagination = (
  props: JSX.IntrinsicAttributes & PaginationProps,
) => {
  return (
    <Pagination
      {...props}
      paginationStyle={paginationStyle.paginationContainer}
      paginationStyleItem={paginationStyle.pagination}
      paginationDefaultColor="#E5E7EB"
      paginationActiveColor="#1F54CF"
      paginationStyleItemActive={paginationStyle.activeItem}
    />
  );
};
const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  return (
    <View style={{height: 65, justifyContent: 'center'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        source={require('src/assets/images/pageBackground.png')}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 1,
          position: 'absolute',
          zIndex: -999,
        }}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('src/assets/images/icons/left.png')}
            style={{marginHorizontal: 25}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'white',
            lineHeight: 24,
            fontFamily: 'Poppins-Medium',
            textTransform: 'capitalize',
          }}>
          Product Details
        </Text>
        <View style={{flex: 1, alignItems: 'flex-end', paddingHorizontal: 25}}>
          <Image source={require('src/assets/images/icons/lock.png')} />
        </View>
      </View>
    </View>
  );
};
const SingleItem = () => {
  const product = {
    name: 'Fashionable Ruffle Wool Dobby Blouse',
    images: [
      {
        id: 411537,
        productId: 723792,
        priority: 0,
        url: '31/gv1541-app-photo-front-white-dab3cdfde4664920b15f9c604ef4adf0.jpg',
      },
      {
        id: 410954,
        productId: 723792,
        priority: 1,
        url: '31/gv1541-app-virtual-3d-4-white.jpg',
      },
      {
        id: 411029,
        productId: 723792,
        priority: 1,
        url: '31/gv1541-app-virtual-3d-8-white.jpg',
      },
    ],
    oldPrice: 400,
    newPrice: 200,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis maecenasnisl ipsum act. Quis maecenas nisl ipsum ac',
    colors: [
      {color: '#830B14', value: 'red'},
      {color: '#000000', value: 'black'},
      {color: '#0052D3', value: 'blue'},
      {color: '#FCBC04', value: 'yellow'},
    ],
    sizes: [
      {size: 'S', value: 'small'},
      {size: 'M', value: 'medium'},
      {size: 'L', value: 'large'},
    ],
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.sliderContainer}>
          <SwiperFlatList
            data={product.images}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            renderItem={({item, index}: any) => (
              <View style={styles.sliderTile} key={index.toString()}>
                <View style={styles.imageContainer}>
                  <Image
                    key={index.toString()}
                    style={styles.image}
                    source={{
                      uri: 'https://api.yeshtery.com/v1/yeshtery/files/31/designed-to-move-graphic-crop-top-black-hc9165-21-model.jpg',
                    }}
                  />
                </View>
              </View>
            )}
            showPagination
            PaginationComponent={CustomPagination}
          />
        </View>
        <View style={styles.productHeader}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.newPrice}>( {product.newPrice} EGP )</Text>
            <Text style={styles.oldPrice}>{product.oldPrice} EGP</Text>
          </View>
        </View>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.subTitle}>Color</Text>
        <RadioColor
          direction="row"
          data={product.colors}
          onChange={e => console.log(e)}
        />
        <Text style={styles.subTitle}>Size</Text>
        <RadioSize
          direction="row"
          data={product.sizes}
          onChange={e => console.log(e)}
        />
        <View style={{flexDirection: 'row', marginTop: 37.92}}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <Image
              source={require('src/assets/images/icons/qr.png')}
              style={{
                width: 34.53,
                height: 34.53,
                marginRight: 10.23,
                marginLeft: 9,
              }}
            />
            <View>
              <Text
                style={{
                  color: '#1F54CF',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  marginVertical: 0,
                  marginBottom: -10,
                }}>
                Color
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  marginVertical: 0,
                }}>
                & get 100 points
              </Text>
            </View>
          </View>
          <LinearGradient
            start={{x: 0.7, y: 0.1}}
            end={{x: 0.6, y: 0.9}}
            locations={[0.1, 19]}
            colors={['#5C4CDB', '#00E8DB']}
            style={styles.gradientButton}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Scan
            </Text>
          </LinearGradient>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <Image
              source={require('src/assets/images/icons/frame.png')}
              resizeMode="contain"
              style={{
                height: 32,
                width: undefined,
                aspectRatio: 1,
                marginRight: 10.23,
                marginLeft: 9,
              }}
            />
            <View>
              <Text
                style={{
                  color: '#1F54CF',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  marginVertical: 0,
                  marginBottom: -10,
                }}>
                Buy & Submit
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  marginVertical: 0,
                }}>
                the receipt for 120 points
              </Text>
            </View>
          </View>
          <LinearGradient
            start={{x: 0.7, y: 0.1}}
            end={{x: 0.6, y: 0.9}}
            locations={[0.1, 19]}
            colors={['#5C4CDB', '#00E8DB']}
            style={styles.gradientButton}>
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
              }}>
              Add To Cart
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  page: {flex: 1, paddingTop: 26},
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 27,
    borderTopLeftRadius: 27,
    paddingVertical: 0,
    paddingHorizontal: 15,
  },
  image: {
    height: '100%',
    width: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  text: {
    fontSize: width * 0.1,
    color: 'whitesmoke',
    textAlign: 'center',
  },
  productTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 20,
    color: 'black',
    flex: 2,
    marginLeft: 9,
  },
  priceContainer: {
    marginRight: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  sliderTile: {
    width: width - 30,
    height: '100%',
    marginRight: 30,
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 19.93,
    borderColor: '#D4D4D4',
  },
  sliderContainer: {width, height: 285, marginTop: 37},
  subTitle: {
    color: '#1F54CF',
    fontFamily: 'Poppins-Medium',
    marginTop: 37,
    marginLeft: 18,
  },
  productDescription: {
    fontFamily: 'Poppins-Regular',
    color: '#090A0A99',
    fontSize: 14,
    marginHorizontal: 12,
    marginTop: 24,
  },
  productHeader: {flexDirection: 'row', marginTop: 40, marginHorizontal: 4},
  newPrice: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#1F54CF',
  },
  oldPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#9C9C9C',
    textDecorationLine: 'line-through',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientButton: {
    width: 102,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SingleItem;
