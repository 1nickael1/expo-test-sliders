import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

// import { Container } from './styles';

export const DrawerScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <View style={styles.button}>
            <Text>Icone</Text>
            <Text>Opção</Text>
        </View>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: "#9AEF",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });