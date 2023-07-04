import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'; 
import {Montserrat_400Regular, useFonts} from '@expo-google-fonts/montserrat';

export default function App() {
    let [fontsLoaded] = useFonts({
      Montserrat_400Regular
    });

    if (!fontsLoaded) {
      return <Text>CARREGANDO FONTES</Text>
    } else {
      return (
      <View style={styles.container}>
        <StatusBar style="auto" />

      <LinearGradient 
      colors={['rgba(73, 96, 249, 1)', 'rgba(25, 55, 254, 1)']}
      style={styles.headerGradient}>
        <View style={styles.row1}>
          <Entypo name="menu" size={36} color="white"/>

          <Image style={styles.minhaFoto} 
          source={{uri: 'https://img.a.transfermarkt.technology/portrait/header/8198-1685035469.png?lm=1'}}>
          </Image>
        </View>

        <Text style={styles.bemvindo} >Bem Vindo(a), {'\n'} Usuário</Text>
      </LinearGradient>

      <View>
        <View style={styles.resumoSaldo}>
          <Text>Seu saldo total</Text>
          <Text>R$ 8.500,00</Text>
        </View>
      </View>
      </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerGradient: { //fundo azul
    width: '100%',
    height: '30%',
    padding: 20,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85
  },
  minhaFoto: {
    width: 70,
    height: 95,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bemvindo: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 26,
    color: 'white',
    marginLeft: 50
  },
  resumoSaldo: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    top: -50,
    borderRadius: 40,
    padding: 20, 
    marginTop: 15
  }
});
