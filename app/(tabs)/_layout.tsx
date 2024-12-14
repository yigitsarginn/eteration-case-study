/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import { useEffect, type ReactNode } from 'react';

import { colors } from '@/theme';
import { BasketIcon } from '@/assets/icons/BasketIcon';
import { HomeIcon } from '@/assets/icons/HomeIcon';
import { PersonIcon } from '@/assets/icons/PersonIcon';
import { StarIcon } from '@/assets/icons/StarIcon';
import { normalize } from '@/utils/layout-utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, Text } from '@/components';
import { useFileStorage } from '@/hooks/useFileStorage';
import { Platform, StyleSheet } from 'react-native';

export default function TabsLayout(): ReactNode {
  const insets = useSafeAreaInsets();
  const { itemCount, loadCart } = useFileStorage();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        headerShown: false,
        tabBarLabel: () => null,
        tabBarItemStyle: {
          paddingTop: normalize(10),
        },
        tabBarStyle: {
          height: insets.bottom + normalize(60),
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon
              color={color}
              width={normalize(32.31)}
              height={normalize(30)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Box>
              {itemCount > 0 && (
                <Box center color="red" style={styles.countBadge}>
                  <Text
                    weight={Platform.OS === 'android' ? 'bold' : 'medium'}
                    variant="tiny"
                    color="white"
                  >
                    {itemCount}
                  </Text>
                </Box>
              )}
              <BasketIcon
                color={color}
                width={normalize(34.15)}
                height={normalize(30)}
              />
            </Box>
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ color }) => (
            <StarIcon
              color={color}
              width={normalize(32.31)}
              height={normalize(30)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <PersonIcon
              color={color}
              width={normalize(27.69)}
              height={normalize(30)}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  countBadge: {
    position: 'absolute',
    width: normalize(22),
    height: normalize(22),
    borderRadius: normalize(11),
    right: -normalize(10),
    top: -normalize(3),
    zIndex: 9,
    borderWidth: 2,
    borderColor: colors.white,
  },
});
