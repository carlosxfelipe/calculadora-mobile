import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

import {
  Container,
  Content,
  Title,
  Label,
  OutputLabel,
  TextInput,
  RoundedButtons,
  Button,
  Footer,
  RoundedButtonsText,
} from './styles';

const Calculadora = () => {
  const [valorA, setValorA] = useState('');
  const [valorB, setValorB] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <Container>
      <Content>
        <Title>Calculadora</Title>

        <Label>Valor A</Label>
        <TextInput
          placeholder="Digite o primeiro valor"
          value={valorA}
          onChangeText={text => setValorA(text)}
        />

        <Label>Valor B</Label>
        <TextInput
          placeholder="Digite o segundo valor"
          value={valorB}
          onChangeText={text => setValorB(text)}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Pressable
            onPress={() =>
              setResultado(parseFloat(valorA, 10) + parseFloat(valorB, 10))
            }>
            <RoundedButtons>
              <RoundedButtonsText>+</RoundedButtonsText>
            </RoundedButtons>
          </Pressable>

          <Pressable
            onPress={() =>
              setResultado(parseFloat(valorA, 10) - parseFloat(valorB, 10))
            }>
            <RoundedButtons>
              <RoundedButtonsText>-</RoundedButtonsText>
            </RoundedButtons>
          </Pressable>
          <Pressable
            onPress={() =>
              setResultado(parseFloat(valorA, 10) / parseFloat(valorB, 10))
            }>
            <RoundedButtons>
              <RoundedButtonsText>/</RoundedButtonsText>
            </RoundedButtons>
          </Pressable>
          <Pressable
            onPress={() =>
              setResultado(parseFloat(valorA, 10) * parseFloat(valorB, 10))
            }>
            <RoundedButtons>
              <RoundedButtonsText>*</RoundedButtonsText>
            </RoundedButtons>
          </Pressable>
        </View>

        <OutputLabel>O resultado é {resultado}</OutputLabel>
      </Content>
      <Footer>{'Carlos Felipe Araújo 2022'}</Footer>
    </Container>
  );
};

export default Calculadora;
