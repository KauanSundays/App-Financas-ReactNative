import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'; 
import {Montserrat_400Regular, Montserrat_700Bold, useFonts} from '@expo-google-fonts/montserrat';

export default function App() {
    let [fontsLoaded] = useFonts({
      Montserrat_400Regular, 
      Montserrat_700Bold
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
          source={{uri: 'https://pm1.aminoapps.com/6246/42a391a826b782e4b91b14b478ba0d6304db5d90_hq.jpg'}}>
          </Image>
        </View>

        <Text style={styles.bemvindo} >Bem Vindo(a), {'\n'} Usuário</Text>
      </LinearGradient>

      <View style={styles.viewMaior}>
        <View style={styles.resumoSaldo}>
          <Text style={{color: '#3A3A3A', fontSize: 20, fontFamily: 'Montserrat_400Regular'}}>Seu saldo total</Text>
          <Text style={{color: '#348DF6', fontSize: 32, fontFamily: 'Montserrat_700Bold'}}>R$ 8.500,00</Text>
        </View>

        <View style={styles.verifique}> 
          <LinearGradient
            colors={['#2C4ED4', '#493DEB']}
            style={styles.contaGradient}>
                <Text style={{fontSize: 18, color: 'white', fontFamily: 'Montserrat_400Regular'}}>
                  Verifique suas contas Bancarias 
                </Text>
          </LinearGradient>
        </View>
      </View>
      </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
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
    height: 70,
    borderColor: 'black',
    borderRadius: 8
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
    marginTop: 15,
    fontSize: 30,
    padding: 20,
    alignItems: 'flex-start',

    //ELEVAÇÃO
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5
  },
  viewMaior: {
    width: '100%',
    alignItems: 'center'
  },
  verifique: {
    width: '80%',
    height: '20%',
  },
  contaGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 20,
    padding: 20,

    //elevação
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5
  }

});
