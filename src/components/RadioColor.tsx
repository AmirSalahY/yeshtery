import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type RadioDataProps = {color: string; value: string};
type RadioColorProps = {
  data: RadioDataProps[];
  onChange: (value: any) => void;
  direction?: 'row' | 'column';
};
const RadioColor: React.FC<RadioColorProps> = ({data, onChange, direction}) => {
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
          style={styles.RadioColor}
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
                <View
                  style={[styles.circularColor, {backgroundColor: item.color}]}
                />
              </View>
            </LinearGradient>
          ) : (
            <View
              style={[styles.circularColor, {backgroundColor: item.color}]}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioColor;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  circularColor: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginHorizontal: 4.5,
  },
  RadioColor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gradientBorder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4.5,
  },
  whiteBorder: {
    backgroundColor: 'white',
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
