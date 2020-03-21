import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  const [outputText, setOutputText] = useState('Pressione para ver as dezenas sugeridas');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = "Gerar dezenas" onPress={() => {setOutputText(megaSena())}}/>
    </View>
  );
}
var sorteados = [6];
var valorMaximo = 60;
var qtdMax = 0;
var Resultado = "As dezenas são: ";

function megaSena() {
  if(qtdMax == 6){
    //setOutputText("Jogar novamente!");
    sorteados=[];
    qtdMax=0;
    Resultado = "As dezenas são: ";
  }
  else{
    if (sorteados.length == valorMaximo) {
      if (confirm('As 6 dezenas já foram sorteadas! Quer recomeçar?')) sorteados = [];
      else return;
  }
  var sugestao = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
  while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
      sugestao = Math.ceil(Math.random() * valorMaximo);
  }
  sorteados.push(1+sugestao); // adicionar este numero à array de numeros sorteados para futura referência
  Resultado = (Resultado+ " " + (parseInt(1)+parseInt(sugestao)));
  qtdMax= (parseInt(qtdMax)+parseInt(1));
  return Resultado; // devolver o numero único
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


