import React, { useState } from 'react';
import {View,TextInput,Button,Text,Image,ActivityIndicator,StyleSheet,ScrollView} from 'react-native';

// Componente principal da tela de busca
export default function BuscarJogador() {
    
  // Estado que armazena o texto digitado no input
  const [jogador, setJogador] = useState('');

  // Estado para armazenar os dados retornados da API
  const [resultado, setResultado] = useState(null);

  // Estado para indicar se está carregando (usado no spinner)
  const [loading, setLoading] = useState(false);

  // Função que formata o nome digitado pelo usuário
  const formatarNome = (nome) => {
    return nome
      .trim() // remove espaços antes e depois
      .split(' ') // divide o nome por espaços
      .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()) // coloca primeira letra maiúscula
      .join('_'); // junta as palavras com _ (ex: "Cristiano Ronaldo" → "Cristiano_Ronaldo")
  };

  // Função chamada ao clicar no botão "Buscar"
  const buscarJogador = () => {
    const nomeFormatado = formatarNome(jogador); // normaliza o nome
    setLoading(true); // ativa o indicador de carregamento

    // Faz a requisição para a Wikipedia (versão em português)
    fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(nomeFormatado)}`)
      .then(response => {
        if (!response.ok) throw new Error('Jogador não encontrado');
        return response.json(); // converte resposta em JSON
      })
      .then(data => {
        setResultado(data); // armazena o resultado
        setLoading(false); // desativa o carregamento
      })
      .catch(error => {
        console.error(error); // exibe o erro no console
        setResultado({ title: 'Erro', extract: 'Jogador não encontrado ou nome incorreto.' });
        setLoading(false);
      });
  };

  return (
    <ScrollView style={estilo.background}>
    <View style={estilo.container}>
      {/* Campo de entrada para digitar o nome do jogador */}
      <TextInput
        style={estilo.input}
        placeholder="Digite o nome do jogador"
        value={jogador}
        onChangeText={setJogador} // atualiza o estado conforme o usuário digita
      />

      {/* Botão para iniciar a busca */}
      <Button style= {estilo.btnBuscar} title="Buscar" onPress={buscarJogador} />

      {/* Indicador de carregamento */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

    </View>
    <View style={estilo.exibicao}>
      {/* Exibição do resultado, se existir */}
      {resultado && (
          <View style={estilo.resultado}>
            <Text style={estilo.titulo}>{resultado.title}</Text>

          {/* Se houver imagem disponível, exibe */}
          {resultado.thumbnail && (
            <Image style={estilo.img}
              source={{ uri: resultado.thumbnail.source }}
              
              />
            )}
            <Text style={estilo.biografia}>{resultado.extract}</Text>
          {/* Texto resumo da biografia */}
        </View>
      )}
    </View>
    </ScrollView>
  );
}

// Estilos da interface
const estilo = StyleSheet.create({
    background:{
        backgroundColor: '#4574C4'

    },
    container: {
        paddingRight: 250,
        paddingLeft: 250,
        marginTop: 80,
        
  },
  btnBuscar:{
    borderRadius: 30,
  },    
    exibicao:{
        backgroundColor: '#A2B9E2',
        padding:5,
        margin: 20,
        borderRadius: 20,
    
  },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
  },
    biografia:{
        fontSize: 18,
        textAlign: 'justify'  
    },  
    resultado: {
        marginTop: 20,
        flexDirection: 'row',
        
  },
     titulo: {
        fontSize: 20,
        fontWeight: 'bold',
  },
    img:{
        width: 250,
        height: 300,
        marginLeft: '',
        marginRight: 'auto',
        borderRadius: 15,
        
  },
});
