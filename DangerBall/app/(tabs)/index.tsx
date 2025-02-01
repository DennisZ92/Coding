import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

// Array der Karten mit ihren IDs und Texten
const cardDefinitions = [
  { id: 1, title: 'SHEESH!', text: 'Trink die Hälfte des Inhalts eines deiner Biere', count: 1 }, 
  { id: 2, title: 'Beim nächsten Gegnerwurf', text: 'Du legst fest von wo aus geworfen wird', count: 1 }, 
  { id: 3, title: 'Bei diesem Wurf', text: 'Mach einen großen Schritt nach vorne', count: 1 }, 
  { id: 4, title: 'EHRENMANN', text: 'Spende eines deiner Biere einem deiner durstigen Gegner', count: 1 }, 
  { id: 5, title: 'PROST', text: 'Beim nächsten gegnerischen Treffer trinkst du mit', count: 1 }, 
  { id: 6, title: 'SURPRISE MOTHERFUCKER', text: 'Hol dir noch ein Bier', count: 1 }, 
];

// Funktion zum Erstellen des Kartenpools mit der gewünschten Häufigkeit
const createCardPool = () => {
  return cardDefinitions.flatMap(card => Array(card.count).fill(card)); // Kartenpool mit Häufigkeit
};

export default function HomeScreen() {
  const [currentCard, setCurrentCard] = useState(createCardPool()[0]); // Initiale Karte aus dem Pool

  // Kartenpool erstellen
  const cardPool = createCardPool();

  // Funktion, um eine zufällige Karte aus dem Kartenpool auszuwählen
  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cardPool.length); // Zufallsindex
    setCurrentCard(cardPool[randomIndex]); // Zufällige Karte setzen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danger-Ball</Text> {/* Überschrift */}
      
      {/* Karte mit Hintergrundbild */}
      <ImageBackground
        source={require('@/assets/images/background.png')} // Dein Hintergrundbild hier
        style={styles.card} 
        imageStyle={styles.cardImage} // Optionale Anpassung des Bilds
      >
        {/* Überschrift und Text auf der Karte */}
        <Text style={styles.cardTitle}>{currentCard.title}</Text> {/* Überschrift */}
        <Text style={styles.cardText}>{currentCard.text}</Text> {/* Normaler Text */}
      </ImageBackground>

      {/* Draw Button */}
      <TouchableOpacity style={styles.button} onPress={drawCard}>
        <Text style={styles.buttonText}>Draw</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Den gesamten Bildschirm ausfüllen
    justifyContent: 'center', // Zentriert die Kinder-Elemente vertikal
    alignItems: 'center', // Zentriert die Kinder-Elemente horizontal
    padding: 20, // Etwas Abstand zum Rand
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    padding: 20,
    width: '100%',
    height: 550, // Größe der Karte anpassen
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardImage: {
    borderRadius: 8, // Falls das Bild rundere Ecken haben soll
    opacity: 0.7, // Optional: Bild transparent machen, damit der Text besser lesbar ist
  },
  cardTitle: {
    fontSize: 45, // Größere Schriftgröße für die Überschrift
    color: 'red', // Rote Farbe für die Überschrift
    fontWeight: 'bold',
    textAlign: 'center', // Zentriert die Überschrift
  },
  cardText: {
    fontSize: 30, // Kleinere Schriftgröße für den normalen Text
    color: 'black', 
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10, // Etwas Abstand zwischen der Überschrift und dem Text
  },
  button: {
    padding: 20, // Größeres Padding für einen größeren Button
    backgroundColor: '#A1CEDC',
    borderRadius: 12, // Runde Ecken für den Button
    width: 200, // Breite des Buttons
    height: 60, // Höhe des Buttons
    justifyContent: 'center', // Vertikale Ausrichtung des Textes
    alignItems: 'center', // Horizontale Ausrichtung des Textes
  },
  buttonText: {
    fontSize: 24, // Größere Schrift im Button
    color: 'white',
    fontWeight: 'bold', // Optional: Um den Text fetter zu machen
  },
});
