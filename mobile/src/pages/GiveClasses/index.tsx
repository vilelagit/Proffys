import React from 'react';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import {
  Container,
  Content,
  Title,
  Description,
  Button,
  ButtonText
} from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <Content resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para comecar, voce precisa se cadastrar como professor na nossa plataforma web.
        </Description>
      </Content>
      <Button onPress={handleNavigateBack} >
        <ButtonText>Tudo bem</ButtonText>
      </Button>
    </Container>
  );
}

export default GiveClasses;