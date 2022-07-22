import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTheme } from '../../theme/theme';
import LoaderStyles from './LoaderStyles';

const Loader = props => {
  const theme = useTheme();
  const styles = LoaderStyles(theme);

  const loading = useSelector(state => {
    let isFetching = false;
    const fetchingKeys = [];
    Object.keys(state).forEach(key => {
      if (state[key] && state[key].isLoading) {
        isFetching = true;
        fetchingKeys.push(key);
      }
    });
    return {
      fetching: isFetching,
      fetchingKeys,
    };
  });
  return (
    <>
      {props.children}
      {loading.fetching && (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.gradientLayout}>
              <View style={styles.whiteBg}>
                <ActivityIndicator size={'large'} color={'#09A6C0'} style={styles.loader} />
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

Loader.propTypes = {
  children: PropTypes.any,
};

export default Loader;
