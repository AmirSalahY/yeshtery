// /* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeTile from 'src/components/HomeTile';
import {getAllProducts} from 'src/helpers/apiCalls';
const Header = () => {
  return (
    <View style={headerStyle.mainContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image
        style={headerStyle.backgroundImage}
        source={require('src/assets/images/pageBackground.png')}
      />
      <View style={headerStyle.contentContainer}>
        <Image
          source={require('src/assets/images/icons/left.png')}
          style={headerStyle.leftIcon}
        />
        <Text style={headerStyle.screenTitle}>scan prouducts</Text>
        <View style={headerStyle.screenTitleRight}>
          <Image source={require('src/assets/images/icons/lock.png')} />
        </View>
      </View>
    </View>
  );
};
const HomeScreen: React.FC<any> = ({navigation}) => {
  const [products, setProducts] = useState<any>({});
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    getAllProducts()
      .then((result: any) => {
        setProducts(result.response.products);
        setloading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setloading(false);
      });
  }, [products.response]);

  return (
    <SafeAreaView style={styles.page}>
      <Header />
      <View style={styles.container}>
        {!loading ? (
          <FlatList
            style={styles.list}
            data={products}
            renderItem={({item, index}) => {
              return HomeTile({item, index, navigation});
            }}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopRightRadius: 27,
    borderTopLeftRadius: 27,
    paddingBottom: 20,
    paddingHorizontal: 15,
    flex: 1,
  },
  page: {flex: 1},
  list: {marginBottom: 60},
});
const headerStyle = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    position: 'absolute',
    zIndex: -999,
  },
  screenTitleRight: {flex: 1, alignItems: 'flex-end', paddingHorizontal: 25},
  screenTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    lineHeight: 24,
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
  },
  leftIcon: {marginHorizontal: 25},
  mainContainer: {height: 65, justifyContent: 'center'},
  contentContainer: {flexDirection: 'row', alignItems: 'center'},
});
