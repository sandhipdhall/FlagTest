import React from 'react';
import { View, SafeAreaView ,Text} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../theme/theme';
import CountriesList from '../../widgets/CountriesList/CountriesList';
import CountriesScreenStyles from './CountriesScreenStyles';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import { getLocalizedText } from '../../localization/Config';

const CountriesScreen = props => {
  const theme = useTheme();
  const styles =  CountriesScreenStyles(theme);
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} scrollsToTop={false}>
      <View style={styles.mainContainer}>
        <DashboardHeader
          theme={theme}
          leftButtonOnClick={() => navigation.pop()}
          rightButtonEnable={true}
          headerTitle={getLocalizedText('Countries.headerTitle')}
          customHeaderContainer={styles.customHeaderContainer}
          customHeaderTitleStyle={styles.customHeaderTitleStyle}
        />
       <CountriesList />
      </View>
    </SafeAreaView>
  );
};

export default CountriesScreen;
