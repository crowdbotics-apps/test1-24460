import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile203947Navigator from '../features/UserProfile203947/navigator';
import Settings203946Navigator from '../features/Settings203946/navigator';
import Settings203944Navigator from '../features/Settings203944/navigator';
import SignIn2203942Navigator from '../features/SignIn2203942/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile203947: { screen: UserProfile203947Navigator },
Settings203946: { screen: Settings203946Navigator },
Settings203944: { screen: Settings203944Navigator },
SignIn2203942: { screen: SignIn2203942Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
