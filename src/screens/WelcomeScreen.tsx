import {useWindowDimensions} from 'react-native';
import {
  ArrowRightIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  Heading,
  Text,
  View,
  VStack,
} from '@gluestack-ui/themed';
import { useCallback } from "react";

type LogoProps = {
  width: number;
};

function Logo({width}: LogoProps) {
  return (
    <View w={'100%'} bg={'$red400'}>
      <Text>Test</Text>
    </View>
  );
}

function GetStartedButton({onPress}) {
  return (
    <View w={'100%'}>
      <Button colorScheme={'primary'} size={'xl'} onPress={onPress}>
        <ButtonText>Get Started</ButtonText>
        <ButtonIcon as={ArrowRightIcon} />
      </Button>
    </View>
  );
}

export default function WelcomeScreen({navigation}) {
  const {width} = useWindowDimensions();

  const onGetStartedPress = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <View w={'100%'} h={'100%'} bg={'$black'} px={'$8'}>
      <VStack h={'100%'} justifyContent={'space-between'}>
        <Logo width={width} />
        <GetStartedButton onPress={onGetStartedPress} />
      </VStack>
    </View>
  );
}
