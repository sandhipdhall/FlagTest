import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import routes from '../../const/routes';
import { getLocalizedText } from '../../localization/Config';
import { DUMMY_IMAGE } from '../../assets/const';
import { CountriesDetailScreenStyles } from './CountriesDetailScreenStyles';
import { useTheme } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

export default CountriesDetailScreen = props => {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = CountriesDetailScreenStyles(theme);
  const { selectedData } = props.route?.params;
 // console.log("selectedData", selectedData)

  return (
    <SafeAreaView style={styles.mainItemView}>
       <DashboardHeader
          theme={theme}
          leftButtonOnClick={() => navigation.pop()}
          rightButtonEnable={true}
          headerTitle={getLocalizedText('Countries.headerTitle')}
          customHeaderContainer={styles.customHeaderContainer}
          customHeaderTitleStyle={styles.customHeaderTitleStyle}
        />
      <TouchableOpacity
        style={styles.backView}
        onPress={() => { navigation.goBack() }}>
        <Text style={styles.backText}>{getLocalizedText('Countries.back')}</Text>
      </TouchableOpacity>
      <Image
        source={selectedData?.flags?.png ? { uri: selectedData?.flags?.png } : DUMMY_IMAGE}
        resizeMode="contain"
        style={styles.imgContainer}
      />

      <View style={styles.NameView}>
        <Text style={styles.titleTextStyle} numberOfLines={1}>
          {selectedData?.name?.common} ({selectedData?.altSpellings[0]})
        </Text>

        <View style={styles.detailContainer}>
          <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.nativeName')} : </Text>
          <Text style={[styles.detailTextStyle, styles.greenColor]}>
            {selectedData?.name?.official}
          </Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.population')} : </Text>
          <Text style={[styles.detailTextStyle, styles.greenColor]}>
            {selectedData?.population}
          </Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.region')} : </Text>
          <Text style={[styles.detailTextStyle, styles.greenColor]}>
            {selectedData?.region}
          </Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.subRegion')} : </Text>
          <Text style={[styles.detailTextStyle, styles.greenColor]}>
            {selectedData?.subregion}
          </Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.capital')} : </Text>
          <Text style={styles.detailTextStyle}>
            {selectedData?.capital}
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.borders')} : </Text>
          {
            selectedData?.borders ?
              selectedData?.borders.map((item, index) => (
                <View style={styles.borderView}>
                  <Text style={styles.borderText} key={index}>
                    {item}
                  </Text>
                </View>
              ))
              :
              <Text style={styles.detailTextStyle}>
               {getLocalizedText('Countries.noBorders')}
              </Text>
          }
        </View>
      </View>
    </SafeAreaView>
  )
}