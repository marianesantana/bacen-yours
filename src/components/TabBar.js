import React from 'react';
import { View } from 'react-native';
import Tab from './Tab';

const TabBar = props => {
  const { navigation } = props;
  const { routes, index } = navigation.state;
  return (
    <View
      style={{
        height: 80,
        marginBottom: 10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {routes.map((route, index) => {
        return (
          <Tab
            key={route.routeName}
            title={route.routeName}
            onPress={() => navigation.navigate(route.routeName)}
          />
        );
      })}
    </View>
  );
};

export default TabBar;
