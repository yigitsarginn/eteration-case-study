import * as FileSystem from 'expo-file-system';
import { useState, useEffect, useCallback } from 'react';
import { Product } from '@/features/home/service/products';

export type CartItem = Product & { quantity: number };

const CART_FILE_PATH = `${FileSystem.documentDirectory}cart.json`;

export const useFileStorage = () => {
  const [storedCart, setStoredCart] = useState<CartItem[]>([]);
  const itemCount = storedCart.length;
  const totalPrice = storedCart
    .reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
    .toFixed(2);

  // Load cart from file system
  const loadCart = async () => {
    try {
      const fileExists = await FileSystem.getInfoAsync(CART_FILE_PATH);

      if (fileExists.exists) {
        const content = await FileSystem.readAsStringAsync(CART_FILE_PATH);
        const parsedCart = JSON.parse(content) || [];
        setStoredCart(parsedCart); // Load into state
      } else {
        setStoredCart([]); // Assign an empty list
      }
    } catch (error) {
      console.error('Error loading cart from storage:', error);
    }
  };

  // Save the cart to the file system
  const saveCart = async (cart: CartItem[]) => {
    try {
      await FileSystem.writeAsStringAsync(CART_FILE_PATH, JSON.stringify(cart));
      setStoredCart(cart); // Update the state
    } catch (error) {
      console.error('Error saving cart to storage:', error);
    }
  };

  // Add a product to the cart
  const addItemToCart = useCallback(
    async (item: Product) => {
      try {
        const fileExists = await FileSystem.getInfoAsync(CART_FILE_PATH);
        let currentCart: CartItem[] = [];

        if (fileExists.exists) {
          const content = await FileSystem.readAsStringAsync(CART_FILE_PATH);
          currentCart = JSON.parse(content) || [];
        }

        const existingItemIndex = currentCart.findIndex(
          (cartItem) => cartItem.id === item.id,
        );

        let updatedCart;
        if (existingItemIndex >= 0) {
          updatedCart = [...currentCart];
          updatedCart[existingItemIndex].quantity += 1;
        } else {
          updatedCart = [...currentCart, { ...item, quantity: 1 }];
        }

        await saveCart(updatedCart);
        setStoredCart(updatedCart);
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    },
    [saveCart],
  );

  // Update the quantity of an item in the cart
  const updateCartItemQuantity = async (id: string, quantity: number) => {
    try {
      const updatedCart = storedCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      );

      await saveCart(updatedCart);
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  // Clear the cart
  const clearCart = useCallback(async () => {
    try {
      // Clear the cart in the file system
      await FileSystem.writeAsStringAsync(CART_FILE_PATH, JSON.stringify([]));

      // Immediately clear the state
      setStoredCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  }, []);

  // Load the cart on initial render
  useEffect(() => {
    loadCart();
  }, []);

  return {
    storedCart,
    addItemToCart,
    loadCart,
    updateCartItemQuantity,
    itemCount,
    totalPrice,
    clearCart,
  };
};
