import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useTheme } from '../../theme/theme';
import {handleError, handleSuccess} from '../../const/utilMethods';
import { apiCallWithRedux } from '../../utils/api/reduxApi';
import { BASE_URL, GET_ALL_COUNTRY_LIST } from '../../const/ApiConst';
import { API_PARAMS } from '../../const/utilConst';
import { ALL_COUNTRIES_REDUCER } from '../../redux/reducerConst';
import {SEARCH} from '../../assets/const';
import CountriesListStyles from './CountriesListStyles';
import { getLocalizedText } from '../../localization/Config';
import Card from '../../components/Card/Card';
import InputText from '../../components/InputText/InputText';

const CountriesList = () => {
  const theme = useTheme();
  const styles = CountriesListStyles(theme);
  const [allCountriesList, setAllCountriesList] = useState([]);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    callCountriesListApi();
  }, []);

  function callCountriesListApi() {
    apiCallWithRedux({
      reducerName: ALL_COUNTRIES_REDUCER,
      apiEndPoint: `${BASE_URL}${GET_ALL_COUNTRY_LIST}`,
      requestType: API_PARAMS.GET,
    })
      .then(res => {
        if (res?.response !== '') {
          setAllCountriesList(res?.response)
          setFilterData(res?.response);
        } 
      })
      .catch(err => {
        handleError(err);
      });
  }

  const renderItem = ({ item, index }) => (
    <Card
      theme={theme}
      cardData={item}
    />
  );

  const SearchFilter =(text)=>{
    if (text) {
      const newData = allCountriesList.filter((item)=>{
       // console.log("all items",item.name.common)
        const itemData = item.name.common ? item.name.common.toUpperCase():''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(allCountriesList);
      setSearch(text);
    }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>{getLocalizedText('Countries.headerTitle')}</Text>
      <View style={styles.searchContainer}>
          <InputText
            theme={theme}
            textValue={search || ''}
            customTextInputStyle={styles.customTextInputStyle}
            customPlaceholderStyle={styles.customPlaceholderStyle}
            placeholder={getLocalizedText('Countries.searchPlaceHolder')}
            onChangeText={text => {
              SearchFilter(text);
            }}
            rightIcon={SEARCH}
            rightIconVisible={true}
          />
        </View>
        <FlatList
          data={filterData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
          contentContainerStyle={styles.contentContainerStyle}
        />
      
    </View>
  );
};

CountriesList.propTypes = {};

export default CountriesList;
