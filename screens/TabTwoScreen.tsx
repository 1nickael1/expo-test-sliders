import { StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <Carousel
          width={300}
          height={150}
          loop
          autoPlay
          autoPlayInterval={3000}
          mode='parallax'
          modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
          }}
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text>{item}</Text>
              </View>
            )
          }}
      />
      <Text>Alo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#DFDFDF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 2,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
