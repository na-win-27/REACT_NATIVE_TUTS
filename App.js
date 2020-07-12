import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Hello from "./src/screens/Hello"
import ListScreen from "./src/screens/ListScreen.jsx"
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColourScreen from './src/screens/ColourScreen'
import SquareScreen from'./src/screens/SquareScreen'
import TextScreen from'./src/screens/TextScreen'
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Hello:Hello,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Colour:ColourScreen,
    Square:SquareScreen,
    Text:TextScreen,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "REACT NATIVE"
    }
  }
);

export default createAppContainer(navigator);
