import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import { Product } from '@/features/home/service/products';

const FAVORITES_FILE_PATH = `${FileSystem.documentDirectory}favorites.json`;

export const useFavoritesStorage = () => {
  const [favorites, setFavorites] = useState<Record<string, Product>>({});

  // Load favorites from device storage
  const loadFavorites = async () => {
    try {
      const fileExists = await FileSystem.getInfoAsync(FAVORITES_FILE_PATH);
      if (fileExists.exists) {
        const content = await FileSystem.readAsStringAsync(FAVORITES_FILE_PATH);
        const parsedFavorites = JSON.parse(content) || {};
        setFavorites(parsedFavorites);
      } else {
        setFavorites({});
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  // Save favorites to device storage
  const saveFavorites = async (newFavorites: Record<string, Product>) => {
    try {
      await FileSystem.writeAsStringAsync(
        FAVORITES_FILE_PATH,
        JSON.stringify(newFavorites),
      );
      setFavorites(newFavorites);
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  // Add or remove a product from favorites
  const toggleFavorite = async (product: Product) => {
    const updatedFavorites = { ...favorites };
    if (updatedFavorites[product.id]) {
      // Remove from favorites
      delete updatedFavorites[product.id];
    } else {
      // Add to favorites
      updatedFavorites[product.id] = product;
    }
    await saveFavorites(updatedFavorites);
  };

  // Load favorites on initial render
  useEffect(() => {
    loadFavorites();
  }, []);

  return { favorites, toggleFavorite, loadFavorites };
};
