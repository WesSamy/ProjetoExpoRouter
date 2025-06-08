import { ScrollView, View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import {Link} from 'expo-router';

export default function Home() {
    return (
        <ScrollView style = {estilo.background}>
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./../../assets/images/logo0.png')}style= {estilo.logo}/>
            </View>

            <Pressable style= {estilo.btnLegend}>
                <Link href = "../lendas">
                    <Text style = {estilo.txtLink_lendas}> 🏆 Lendas</Text>
                </Link> 

            </Pressable>

            <Pressable style= {estilo.btnLegend}>
                <Link href = "/(tabs)/curiosidades">
                    <Text style = {estilo.txtLink_Curiosidades}> 🏆 Curiosidades</Text>
                </Link>
            </Pressable>

               <Pressable style= {estilo.btnLinkQuebrado}>
                <Link href = "../LinkQuebrado" style = {estilo.linkQuebrado}>
                    <Text style = {estilo.txtLink_Quebrado}> LinkQuebrado</Text>
                </Link>
            </Pressable>
            
             
            <Text style = {estilo.txt}>
                <p>
                Bem-vindo ao portal dos gigantes do futebol! Aqui, celebramos a genialidade dos melhores jogadores da história, aqueles que redefiniram o esporte com talento, paixão e feitos inesquecíveis. De lendas imortais como Pelé e Maradona a magos da bola como Messi e Cristiano Ronaldo, cada nome que figura nesta página é sinônimo de arte e emoção nos gramados.
                </p>
                Acompanhe a trajetória dos ícones que fizeram história, desde dribles desconcertantes até gols que marcaram épocas. Descubra estatísticas impressionantes, curiosidades e o legado que esses astros deixaram para o futebol mundial.
                <p>
                Seja você um fã de longa data ou um novo admirador do jogo, este espaço é feito para quem reconhece a grandeza dos que transformaram futebol em espetáculo. Prepare-se para reviver momentos épicos e homenagear os gigantes da bola! ⚽🏆🔥
                </p>    
            </Text>

           


        </ScrollView>
    )

  
}
 const estilo = StyleSheet.create({
        background: {
            backgroundColor: '#5E8646'
        },
        logo: {
            width: '95%',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: 190,
            resizeMode: 'contain',
            marginTop: 5,
        },
        txt: {
            width: '85%',
             marginLeft: 'auto',
             marginRight: 'auto',
             fontSize: 20,
             textAlign: 'justify',
             fontWeight: '800'
        },
        btnLegend:{
       
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor:'#1C8776',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        txtLink_lendas: {
            fontSize: 16,
            fontWeight: '700',
            color: 'white',
            
        },
        txtLink_Curiosidades: {
            fontSize: 16,
            fontWeight: '700',
            color: 'white'
        },

        btnLinkQuebrado:{
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor:'#1C8776',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        txtLink_Quebrado: {
            fontSize: 16,
            fontWeight: '700',
            color: 'white'
        }
    })