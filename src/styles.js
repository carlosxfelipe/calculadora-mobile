import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  padding: 16px;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: black;
  font-weight: bold;
`;

export const Label = styled.Text`
  font-size: 24px;
  color: black;
  margin-bottom: 4px;
`;

export const OutputLabel = styled.Text`
  font-size: 24px;
  color: black;
  margin-top: 16px;
`;

export const TextInput = styled.TextInput.attrs({
  keyboardType: 'decimal-pad',
})`
  border-color: #dddddd;
  border-width: 1px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const RoundedButtons = styled.View`
  background-color: black;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`;

export const RoundedButtonsText = styled.Text`
  color: white;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const Button = styled.Button.attrs({
  color: 'black',
})``;

export const Footer = styled.Text`
  color: black;
  text-align: center;
`;
