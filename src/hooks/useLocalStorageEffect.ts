import { useEffect, useState } from 'react';

type StorageState = { [key: string]: string | null };

const useLocalStorageEffect = (keys: string[]): StorageState => {
  const [storageState, setStorageState] = useState<StorageState>({});

  useEffect(() => {
    const handleStorageChange = () => {
      const newState: StorageState = {};

      keys.forEach(key => {
        newState[key] = localStorage.getItem(key);
      });
      setStorageState(newState);
    };

    // Підписка на події зміни локального сховища
    window.addEventListener('storage', handleStorageChange);

    // Ініціалізація стану з даних у локальному сховищі
    const initialState: StorageState = {};

    keys.forEach(key => {
      initialState[key] = localStorage.getItem(key);
    });
    setStorageState(initialState);

    // Прибирання підписки після завершення компонента
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [keys]);

  return storageState;
};

export default useLocalStorageEffect;
