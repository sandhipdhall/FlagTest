import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import routes from '../../const/routes';
import { getLocalizedText } from '../../localization/Config';
import { DUMMY_IMAGE } from '../../assets/const';
import { CardStyles } from './CardStyles';

const Card = ({ theme, cardData }) => {
  const navigation = useNavigation();
  const styles = CardStyles(theme);
  return (
    <TouchableOpacity onPress={() => { navigation.navigate(routes.CountriesDetailScreen, { selectedData: cardData }); }} style={styles.mainItemView}>
      <Image
        source={cardData?.flags?.png ? { uri: cardData?.flags?.png } : DUMMY_IMAGE}
        resizeMode="contain"
        style={styles.imgContainer}
      />
      <View style={styles.headerContainer}>
        <View style={styles.subContainer}>
          <View style={styles.NameView}>
            <Text style={styles.titleTextStyle} numberOfLines={1}>
              {cardData?.name?.common} ({cardData?.altSpellings[0]})
            </Text>
          </View>
        </View>
        <View style={styles.regionView}>
          <Text style={styles.regionTextStyle}>
            {cardData?.region}
          </Text>
        </View>
      </View>
      <View style={styles.DetailContainer}>
        <View>
          <View>
            <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.capital')}</Text>
            <Text style={styles.detailTextStyle}>
              {cardData?.capital}
            </Text>
          </View>
          <View style={styles.marginTop10}>
            <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.population')}</Text>
            <Text style={[styles.detailTextStyle, styles.greenColor]}>
              {cardData.population}
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.area')}</Text>
            <Text style={[styles.detailTextStyle, styles.greenColor]}>
              {cardData.area}
            </Text>
          </View>
          <View style={styles.marginTop10}>
            <Text style={styles.DetailTextStyle}>{getLocalizedText('Countries.unMember')}</Text>
            <Text style={styles.detailTextStyle}>
              {cardData.unMember ? 'Yes' : 'No'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  theme: PropTypes.object,
  cardData: PropTypes.object,
};

export default Card;
