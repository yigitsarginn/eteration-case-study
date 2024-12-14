import React, { useEffect } from 'react';
import { Box, BottomBadge, Header, Text } from '@/components';
import { useFileStorage } from '@/hooks/useFileStorage';
import { t } from '@/lang';
import { normalize } from '@/utils/layout-utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './Cart.styles';
import { CartList } from '../../components/CartList/CartList';

export const Cart: React.FC = () => {
  const {
    storedCart,
    loadCart,
    updateCartItemQuantity,
    totalPrice,
    clearCart,
  } = useFileStorage();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <Box flex={1}>
      <Header
        title={t('eMarket')}
        titleAlignment="left"
        style={{
          paddingTop: insets.top + normalize(6),
          paddingBottom: normalize(14),
          paddingHorizontal: normalize(16),
        }}
      />
      <Box flex={1} px={normalize(16)}>
        {storedCart.length > 0 ? (
          <CartList
            items={storedCart}
            onUpdateQuantity={updateCartItemQuantity}
          />
        ) : (
          <Box flex={1}>
            <Text style={styles.emptyCart}>{t('yourCartEmpty')}</Text>
          </Box>
        )}
        <BottomBadge
          buttonLabel={t('complete')}
          priceLabel={t('total')}
          price={totalPrice}
          onPress={() => {
            clearCart();
            alert(t('complete'));
          }}
        />
      </Box>
    </Box>
  );
};
