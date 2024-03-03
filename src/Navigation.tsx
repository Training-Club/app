import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {StackNavigationOptions} from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createSharedElementStackNavigator();

export default function Navigation() {
  const globalScreenOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  // Smooths shared element transitions
  const fadeTransition = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{cardStyleInterpolator: fadeTransition}}>
      <>
        <Stack.Screen
          name={'Welcome'}
          component={WelcomeScreen}
          options={globalScreenOptions}
        />
        <Stack.Screen
          name={'Login'}
          component={LoginScreen}
          options={globalScreenOptions}
        />
      </>
    </Stack.Navigator>
  );
}
