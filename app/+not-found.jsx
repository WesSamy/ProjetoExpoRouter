import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotFoundScreen() {
  const router = useRouter();
  return(
    <View style={estilo.container}>
      <Text style={estilo.title}>Você não deveria estar aqui!</Text>
      <Image source={require('./../assets/images/sabiaNao.gif')} style={estilo.img} />
      <Text style={estilo.title}> Erro 404: Page not found!</Text>
      <Text style={estilo.txt}>Você acessou um link quebrado e por isso está vendo essa mensagem</Text>
      {/* Botão para voltar usando goBack() */}
      <Pressable style={estilo.btn} onPress={() => router.back()}>
        <Text style={estilo.linkTxt}>Retornar para home</Text>
      </Pressable>
    </View>
  )
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#131616'
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 20,
  },
  txt:{
    color: 'white',
    fontSize: 16,
    margin: 14
  },
  btn:{
    padding: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white'
  },
  linkTxt:{
    fontSize:18,
    fontWeight:'600',

  }
})