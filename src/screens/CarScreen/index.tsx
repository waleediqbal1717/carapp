import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import styles from './styles';
import {usermanager} from '../../managers/UserManager';
import theme from '../../theme';

interface Props {}
const CarScreen = observer((props: Props) => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={theme.colors.containerBackground}
      />
    </SafeAreaView>
  );
});
export default CarScreen;
