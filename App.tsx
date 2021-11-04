import React from 'react';
import {StyleSheet} from 'react-native';

import CacheImage from './src/component/cache-image';

const App = () => {
  return (
    <>
      <CacheImage uri="https://i.imgur.com/DkKuqmy.jpg" style={styles.image} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {width: 50, height: 50},
});

export default App;
