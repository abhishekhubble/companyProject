import Home from './src/Home/Home.';
import SignUpComp from './src/SignUpComp/SignUpComp';
import SignUpError from './src/SignUpError/SignUpError';
import WelcomeScreen from './src/WelcomeScreen/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Define your stack navigator
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen" options={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpError" component={SignUpError} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpComp" component={SignUpComp} options={{ headerShown: false }} />

      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MyStack;
