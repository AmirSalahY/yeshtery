import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type RadioDataProps = {size: string; value: string};
type RadioSizeProps = {
  data: RadioDataProps[];
  onChange: (value: any) => void;
  direction?: 'row' | 'column';
};
const RadioSize: React.FC<RadioSizeProps> = ({data, onChange, direction}) => {
  const [checkedButton, setCheckedButton] = useState(data[0].value);
  const changeValue = (value: string) => {
    setCheckedButton(value);
    onChange(value);
  };
  return (
    <View
      style={[styles.container, direction ? {flexDirection: direction} : null]}>
      {data.map((item: RadioDataProps, index: number) => (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.RadioSize}
          key={index}
          onPress={() => changeValue(item.value)}>
          {checkedButton == item.value ? (
            <LinearGradient
              start={{x: 1.0, y: 0.1}}
              end={{x: 0.1, y: 0.9}}
              locations={[0, 0.9]}
              colors={['#5C4CDB', '#00E8DB']}
              style={styles.gradientBorder}>
              <View style={styles.whiteBorder}>
                <Text style={styles.sizeText}>{item.size}</Text>
              </View>
            </LinearGradient>
          ) : (
            <View style={styles.circularColor}>
              <Text style={styles.sizeText}>{item.size}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioSize;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  circularColor: {
    width: 68.6,
    height: 32.94,
    borderRadius: 100,
    marginHorizontal: 4.5,
    borderColor: '#C7C7C5',
    borderWidth: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RadioSize: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gradientBorder: {
    width: 68.6,
    height: 32.94,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4.5,
  },
  whiteBorder: {
    backgroundColor: 'white',
    width: 64.6,
    height: 28.94,
    borderRadius: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    color: '#707070',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlignVertical: 'center',
  },
});
