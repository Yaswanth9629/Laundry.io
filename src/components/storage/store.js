import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { SkyshipReducer } from "./reducer";
import { serializer } from "../../../metro.config";

//persisit configration
const persisitConfig = {
  key:'Skyship',
  storage:AsyncStorage
};

//middleware
const persistreducer = persistReducer(persisitConfig,SkyshipReducer)

const store = configureStore({
  reducer: persistreducer,
  middleware:getDefaultMiddleware => getDefaultMiddleware({
    immutableCheck:false,
    serializableCheck:false
  })
})

let persisiter = persistStore(store)
export {store, persisiter}