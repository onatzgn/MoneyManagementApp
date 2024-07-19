import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import themeReducer from './Reducers/themeReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);

export default store;
