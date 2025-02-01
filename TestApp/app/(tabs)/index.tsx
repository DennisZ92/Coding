import { Image, StyleSheet, Platform, Button } from 'react-native';
import { Audio } from 'expo-av';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

let soundInstance: Audio.Sound | null = null; // Sound-Instanz oder null
let intervalId: NodeJS.Timeout | null = null; // Intervall-ID

export default function HomeScreen() {
  const playSound = async () => {
    if (!soundInstance) {
      // Lade den Sound
      const { sound } = await Audio.Sound.createAsync(
        require('@/assets/sounds/sound.mp3')
      );
      soundInstance = sound;

      // Spiele den Sound und setze ein Intervall von 15 Sekunden
      await sound.playAsync(); // Spielt den Sound sofort ab
      intervalId = setInterval(async () => {
        if (soundInstance) {
          await soundInstance.replayAsync(); // Spielt den Sound nach 15 Sekunden erneut ab
        }
      }, 15000); // Wiederhole alle 15 Sekunden
    }
  };

  const stopSound = async () => {
    if (soundInstance) {
      await soundInstance.stopAsync(); // Stoppt den Sound
      await soundInstance.unloadAsync(); // Gibt die Ressourcen frei
      soundInstance = null; // Setzt die Instanz zurück
    }

    if (intervalId) {
      clearInterval(intervalId); // Stoppt das Intervall
      intervalId = null; // Setzt die Intervall-ID zurück
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Play a Sound with Interval</ThemedText>
        <Button title="Play Sound" onPress={playSound} />
        <Button title="Stop Sound" onPress={stopSound} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
