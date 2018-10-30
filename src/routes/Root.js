import { createStackNavigator } from 'react-navigation';
import FeedScreen from '../containers/FeedScreen';

export const Root= createStackNavigator(
    {
        Home: FeedScreen
    },
    {
        initialRouteName: 'Home'
    }
)