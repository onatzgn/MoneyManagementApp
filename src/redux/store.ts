import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import themeReducer from './Reducers/themeReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage : AsyncStorage
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
  },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  
  
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);

export default store;
