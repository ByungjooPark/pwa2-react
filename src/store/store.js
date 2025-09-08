import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slices/list.js';
import detaileReducer from './slices/detail.js';

// Redux Store 생성 및 설정
export default configureStore({
  reducer: {
    list: listReducer,
    detail: detaileReducer,
  }
});