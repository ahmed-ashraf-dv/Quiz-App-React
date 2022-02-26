import { createSlice, createStore } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  score: null,
  level: 1,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  lang: {
    Viewlang: localStorage.getItem("Lang") || "ar",
    getTRNS: null,
  },
};

const InfoSlice = createSlice({
  name: "Info",
  initialState,
  reducers: {
    postAnsers: (state, action) => {
      console.log(action.payload);
    },
    levelUp: (state, action) => {
      state.level++;
    },
    resetLevel: (state, action) => {
      state.level = 1;
    },
    setUsername: (state, action) => {
      state.userName = action.payload;
    },
    setResult: (state, action) => {
      state.score = action.payload;
    },
    toggleDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
    setTranslate: (state, action) => {
      state.lang.getTRNS = action.payload;
    },
    toggleLanguages: (state, action) => {
      state.lang.Viewlang = state.lang.Viewlang === "ar" ? "en" : "ar";
    },
  },
});

const store = createStore(InfoSlice.reducer);

export default store;
export const {
  postAnsers,
  levelUp,
  setUsername,
  setResult,
  resetLevel,
  toggleDarkMode,
  setTranslate,
  toggleLanguages,
} = InfoSlice.actions;
