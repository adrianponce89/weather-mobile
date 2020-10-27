import React from 'react';
import { View, ProgressBarAndroid } from 'react-native';
// import { ProgressBarAndroid } from '@react-native-community/progress-bar-android';

const LoadingWrapper = ({ loading, children, ...otherProps }) => {
  return (
    <View {...otherProps}>
      {loading ? <ProgressBarAndroid /> : <>{children}</>}
    </View>
  );
};
export default LoadingWrapper;
