import {GluestackUIProvider, SafeAreaView} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {config} from '../config/gluestack-ui.config';

export default function Providers({children}) {
  return (
    <GluestackUIProvider colorMode={'dark'} config={config}>
      <SafeAreaView flex={1} bg={'$black'}>
        <NavigationContainer>{children}</NavigationContainer>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
