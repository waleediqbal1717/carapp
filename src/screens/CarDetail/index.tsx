import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import {Navigation} from 'react-native-navigation';
import styles from './styles';
import {HOME_NAV} from '../../navigation';
import {usermanager} from '../../managers/UserManager';
import theme from '../../theme';

const CarDetail = observer(() => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={theme.colors.containerBackground}
      />
    </SafeAreaView>
  );
});

export default CarDetail;
