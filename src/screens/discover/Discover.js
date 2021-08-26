import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../../constants';

import Follower from './Follower';
import Blocked from './Blocked';
import Following from './Following';
import Likes from './Likes';
import Dislikes from './Dislikes';
import WhoSee from './WhoSee';
import Visited from './Visited';

const Top = createMaterialTopTabNavigator();

const Discover = () => {
  return (
    <Top.Navigator
      swipeEnabled={true}
      lazy={true}
      tabBarOptions={{
        indicatorStyle: {backgroundColor: theme.colors.primary},
        style: {backgroundColor: theme.colors.gray},
        scrollEnabled: true,
      }}>
      <Top.Screen name="Follower" component={Follower} />
      <Top.Screen name="Following" component={Following} />
      <Top.Screen name="Likes" component={Likes} />
      <Top.Screen name="Dislikes" component={Dislikes} />
      <Top.Screen name="Seen" component={WhoSee} />
      <Top.Screen name="Visited" component={Following} />
      <Top.Screen name="Blocked" component={Blocked} />
    </Top.Navigator>
  );
};

export default Discover;
