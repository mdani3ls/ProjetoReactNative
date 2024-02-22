
import React, { useState } from 'react';
import {Text, ScrollView, TextInput, StyleSheet} from 'react-native';

const Principal = () => {
  const [value, setValue] = useState('');

  const formatCurrency = (input) => {
    // Remove tudo que não for dígito
    let stringValue = input.replace(/\D/g, '');

    // Adiciona a vírgula para separar os centavos
    stringValue = stringValue.replace(/(\d)(\d{2})$/, '$1,$2');

    // Adiciona o ponto para separar os milhares
    stringValue = stringValue.replace(/(?=(\d{3})+(\D))\B/g, '.');

    // Adiciona o símbolo de Real
    stringValue = 'R$ ' + stringValue;

    return stringValue;
  };

  const handleChangeText = (text) => {
    const formattedValue = formatCurrency(text);
    setValue(formattedValue);
  };

  return (
    <ScrollView>
      <Text>
        Tela de Controle de Serviços
      </Text>
      <Text>
        Data Atual: 
      </Text>
      <Text>
        Selecione os Serviços:
      </Text>
      <Text>
        Insira o Valor dos Serviços:
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={handleChangeText}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 16,
    width: 200,
  },
});

export default Principal;