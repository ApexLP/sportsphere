import createContextHook from '@nkzw/create-context-hook';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (teamId: string) => void;
  isFavorite: (teamId: string) => boolean;
}

export const [FavoritesProvider, useFavorites] = createContextHook<FavoritesContextType>(() => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem('favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const saveFavorites = async (newFavorites: string[]) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const toggleFavorite = (teamId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(teamId)
        ? prev.filter(id => id !== teamId)
        : [...prev, teamId];
      
      saveFavorites(newFavorites);
      return newFavorites;
    });
  };

  const isFavorite = (teamId: string) => {
    return favorites.includes(teamId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
});