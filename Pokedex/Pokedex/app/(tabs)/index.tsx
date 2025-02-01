import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

interface Pokemon {
  image: any;
  description: string;
}

const pokemonData: { [key: string]: Pokemon } = {
  Bisasam: {
    image: require('../../assets/sprites/1.png'),
    description: "Bisasam ist ein Pflanzen- und Gift-Pokémon der ersten Generation. Es hat die Fähigkeit, Pflanzen durch den Saft in seinem Rücken zu wachsen."
  },
  Bisaknosp: {
    image: require('../../assets/sprites/2.png'),
    description: "Bisaknosp ist die Weiterentwicklung von Bisasam und entwickelt sich zu Bisaflor. Es hat bereits einen größeren Blütenansatz auf seinem Rücken."
  },
  Bisaflor: {
    image: require('../../assets/sprites/3.png'),
    description: "Bisaflor ist die letzte Entwicklungsstufe von Bisasam. Es hat eine große Blume auf seinem Rücken, die bei Sonnenschein blüht."
  }
};

type PokemonName = keyof typeof pokemonData;

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonName | null>(null);

  const handleSelectPokemon = (pokemon: PokemonName) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../../assets/images/5818333.webp')} style={styles.backgroundImage} />
      </View>
      <View style={styles.logo}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
      </View>
      <View style={styles.sidebar}>
        {Object.keys(pokemonData).map((pokemon) => (
          <TouchableOpacity key={pokemon} onPress={() => handleSelectPokemon(pokemon as PokemonName)}>
            <View style={styles.pokemonLink}>
              <Image source={pokemonData[pokemon as PokemonName].image} style={styles.pokemonImage} />
              <Text>{pokemon}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {selectedPokemon && (
        <View id="pokemon-detail" style={styles.pokemonDetail}>
          <Image
            id="pokemon-image"
            source={pokemonData[selectedPokemon].image}
            style={styles.pokemonImageDetail}
          />
          <Text id="pokemon-description">{pokemonData[selectedPokemon].description}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  logo: {
    alignItems: 'center',
    marginTop: 50,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  sidebar: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  pokemonLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pokemonImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  pokemonDetail: {
    marginTop: 20,
    alignItems: 'center',
  },
  pokemonImageDetail: {
    width: 150,
    height: 150,
  },
});