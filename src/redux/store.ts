import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import ThemeReducer from './reducers/ThemeReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserReducer from './reducers/UserReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  theme: ThemeReducer,
  user: UserReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(Store);

export default Store;
