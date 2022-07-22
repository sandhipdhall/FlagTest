import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import { useTheme } from '../../theme/theme';
import { handleError, handleSuccess } from '../../const/utilMethods';
import { apiCallWithRedux } from '../../utils/api/reduxApi';
import { BASE_URL, GET_ALL_COUNTRY_LIST } from '../../const/ApiConst';
import { API_PARAMS } from '../../const/utilConst';
import { ALL_COUNTRIES_REDUCER } from '../../redux/reducerConst';
import { SEARCH, DOWNARROW_ICON } from '../../assets/const';
import CountriesListStyles from './CountriesListStyles';
import { getLocalizedText } from '../../localization/Config';
import Card from '../../components/Card/Card';
import InputText from '../../components/InputText/InputText';
import BottomModal from '../../components/BottomModal/BottomModal';


const CountriesList = () => {
  const theme = useTheme();
  const styles = CountriesListStyles(theme);
  const [allCountriesList, setAllCountriesList] = useState([]);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [regionList, setRegionList] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

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
          regionFiterFormat();
        }
      })
      .catch(err => {
        handleError(err);
      });
  }

  const regionFiterFormat = async () => {
    let countryData = await allCountriesList.map((item, index) => {
      return item.region;
    });
    let uniqueChars = [...new Set(countryData)];
    setRegionList(uniqueChars)
  }

  const SearchFilter = (text) => {
    if (text) {
      const newData = allCountriesList.filter((item) => {
        const itemData = item.name.common ? item.name.common.toUpperCase() : ''.toUpperCase();
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

  const regionFilter = (text) => {
    if (text) {
      const newData = allCountriesList.filter((item) => {
        const itemData = item.region ? item.region.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setFilterData(newData);
      setSelectedRegion(text);
    } else {
      setFilterData(allCountriesList);
    }
  }

  const renderItem = ({ item, index }) => (
    <Card
      theme={theme}
      cardData={item}
    />
  );

  const renderRegionItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        regionFilter(item);
        setFilterModalVisible(false); 
      }}>
      <Text style={styles.modalRegionsText}>{item}</Text>
    </TouchableOpacity>
  );


  function renderFilterModel() {
    return filterModalVisible ? (
      <SafeAreaView style={styles.formView}>
          <Text style={styles.modalHeading}>{getLocalizedText('Countries.selectRegion')}</Text>
          <FlatList
            data={regionList}
            renderItem={renderRegionItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.flatList}
            contentContainerStyle={styles.contentContainerStyle}
          />
      </SafeAreaView>
    ) : null;
  }

  return (
    <View style={styles.mainContainer}>
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
      <TouchableOpacity
        style={styles.filterByRegionView}
        onPress={() => { 
          setFilterModalVisible(true),
          regionFiterFormat();
        }}
      >
        <Text style={styles.filterByRegionText}>{selectedRegion ? selectedRegion: getLocalizedText('Countries.filterByRegion')}</Text>
        <Image style={styles.arrowIcon} source={DOWNARROW_ICON} />
      </TouchableOpacity>
      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerStyle}
      />

      <BottomModal
        visible={filterModalVisible}
        theme={theme}
        onClose={() => {
          setFilterModalVisible(false);
        }}
        customModalContainerStyle={styles.customModalContainer}
        customModalStyle={styles.customModalStyle}
        children={renderFilterModel()}
      />

    </View>
  );
};

CountriesList.propTypes = {};

export default CountriesList;
