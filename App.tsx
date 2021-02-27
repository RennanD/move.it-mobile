import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';

import { Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';

import { Home } from './src/screens/Home';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Rajdhani_600SemiBold,
  });

  return <Home />;
}
