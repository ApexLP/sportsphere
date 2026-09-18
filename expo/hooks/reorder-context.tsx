import createContextHook from '@nkzw/create-context-hook';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ReorderContextType {
  orderedIds: string[];
  setOrder: (ids: string[]) => void;
  clearOrder: () => void;
}

export const [ReorderProvider, useReorder] = createContextHook<ReorderContextType>(() => {
  const [orderedIds, setOrderedIds] = useState<string[]>([]);

  useEffect(() => {
    loadOrder();
  }, []);

  const loadOrder = async () => {
    try {
      const stored = await AsyncStorage.getItem('scoreOrder');
      if (stored) {
        setOrderedIds(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading score order:', error);
    }
  };

  const setOrder = (ids: string[]) => {
    setOrderedIds(ids);
    AsyncStorage.setItem('scoreOrder', JSON.stringify(ids)).catch(error => {
      console.error('Error saving score order:', error);
    });
  };

  const clearOrder = () => {
    setOrderedIds([]);
    AsyncStorage.removeItem('scoreOrder').catch(error => {
      console.error('Error clearing score order:', error);
    });
  };

  return {
    orderedIds,
    setOrder,
    clearOrder,
  };
});
