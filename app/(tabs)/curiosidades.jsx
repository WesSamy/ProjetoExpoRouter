import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';

export default function Curiosidades() {
    return (
        <ScrollView style={estilo.background}>
            <Text style={estilo.title}>Curiosidades do Futebol</Text>
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={estilo.titleArtigo1}><strong>Pickles</strong> - O Heroi</Text>
            <View style={estilo.imgConteiner}>
                <Image source={require('../../assets/images/pickles.png')} style={estilo.img}/>
                <Image source={require('../../assets/images/pickles02.png')} style={estilo.img}/>
            </View>
         
            <Text style={estilo.txt}>
                Em 1966, o troféu da Copa do Mundo foi roubado em Londres antes do torneio começar. O que poderia ter sido um desastre foi resolvido por um cão chamado Pickles, que encontrou a taça debaixo de um arbusto durante um passeio com seu dono. Ele se tornou uma celebridade na época!
            </Text>
        </View>

        <Text style= {estilo.titleArtigo1}> <strong>Brasil</strong> - O único país a ganhar a Copa fora de seu continente</Text>
        <View style={estilo.imgConteiner}>
                <Image source={require('../../assets/images/Brasil1958.png')} style={estilo.img}/>
                <Image source={require('../../assets/images/brasil2002.jpg')} style={estilo.img}/>

            </View>

             <Text style={estilo.txt}>
                A seleção brasileira é a única que conseguiu vencer uma Copa do Mundo fora de seu próprio continente mais de uma vez. Em 1958, conquistou o título na Suécia, e em 2002, no Japão. Isso prova a força da equipe em qualquer lugar do mundo!
            </Text>

              <Text style= {estilo.titleArtigo1}> <strong>Pelé</strong> - O Rei</Text>
        <View style={estilo.imgConteiner}>
                <Image source={require('../../assets/images/Pelé.jpg')} style={estilo.img}/>
                <Image source={require('../../assets/images/PeléGoal.gif')} style={estilo.img}/>
            </View>

             <Text style={estilo.txt}>
               O título de jogador mais jovem a marcar em uma Copa do Mundo pertence a Pelé, que tinha apenas 17 anos quando balançou as redes contra o País de Gales em 1958. Ele não só marcou, como também ajudou o Brasil a conquistar seu primeiro título mundial!
            </Text>
        </ScrollView>
    )
}

const estilo = StyleSheet.create({
    background:{
        backgroundColor: '#FFD633'
    },
    title:{
        fontSize: 38,
        marginTop:25,
        fontWeight: '700',
        textAlign: 'center',
        color: '#1FFF26',
        textDecorationColor: 'black',
        borderWidth: 2,
        borderRadius: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 10, 
        paddingRight: 10,
        backgroundColor: '#174D64' 
    },
    titleArtigo1:{
        fontSize: 26,
        marginTop: 50,
        marginRight: 'auto',
        marginLeft: 'auto',


    },
    txt:{
        width: '95%',
        fontSize: 22,
        textAlign: 'justify',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imgConteiner:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    img:{
        marginTop: 45,
        width: '45%',
        height: 400,
    }
})
