import { configureStore, createSlice } from "@reduxjs/toolkit";

const places = [
  {
    id: 1,
    name: "Amalfi Coast",
    location: "Italy",
    photo: "/assets/Amalfi Coast, Italy.jpg",
    bookmarked: false,
  },
  {
    id: 2,
    name: "Aspen",
    location: "Colorado",
    photo: "/assets/Aspen, Colorado.jpg",
    bookmarked: true,
  },
  {
    id: 3,
    name: "Bagan",
    location: "Myanmar",
    photo: "/assets/Bagan, Myanmar.jpg",
    bookmarked: false,
  },
  {
    id: 4,
    name: "Barcelona",
    location: "Spain",
    photo: "/assets/Barcelona, Spain.jpg",
    bookmarked: false,
  },
  {
    id: 5,
    name: "Bruges",
    location: "Belgium",
    photo: "/assets/Bruges, Belgium.jpg",
    bookmarked: false,
  },
  {
    id: 6,
    name: "Cappadocia",
    location: "Turkey",
    photo: "/assets/Cappadocia, Turkey.jpg",
    bookmarked: false,
  },
  {
    id: 7,
    name: "Chamarel",
    location: "Mauritius",
    photo: "/assets/Chamarel, Mauritius.jpg",
    bookmarked: false,
  },
  {
    id: 8,
    name: "Hallstatt",
    location: "Austria",
    photo: "/assets/Hallstatt, Austria.jpg",
    bookmarked: false,
  },
  {
    id: 9,
    name: "Hamnøy",
    location: "Norway",
    photo: "/assets/Hamnøy, Norway.jpg",
    bookmarked: false,
  },
  {
    id: 10,
    name: "Hampshire",
    location: "England",
    photo: "/assets/Hampshire, England.jpg",
    bookmarked: false,
  },
  {
    id: 11,
    name: "Hvar",
    location: "Croatia",
    photo: "/assets/Hvar, Croatia.jpg",
    bookmarked: false,
  },
  {
    id: 12,
    name: "Kyoto",
    location: "Japan",
    photo: "/assets/Kyoto, Japan.jpg",
    bookmarked: false,
  },
  {
    id: 13,
    name: "Oia",
    location: "Greece",
    photo: "/assets/Oia, Greece.jpg",
    bookmarked: true,
  },
  {
    id: 14,
    name: "Lake Como",
    location: "Italy",
    photo: "/assets/Lake Como, Italy.jpg",
    bookmarked: false,
  },
  {
    id: 15,
    name: "Las Coloradas",
    location: "Mexico",
    photo: "/assets/Las Coloradas, Mexico.jpg",
    bookmarked: false,
  },
  {
    id: 16,
    name: "Maui",
    location: "Hawaii",
    photo: "/assets/Maui, Hawaii.jpg",
    bookmarked: false,
  },
  {
    id: 17,
    name: "Mostar",
    location: "Bosnia",
    photo: "/assets/Mostar, Bosnia.jpg",
    bookmarked: false,
  },
  {
    id: 18,
    name: "Mykonos",
    location: "Greece",
    photo: "/assets/Mykonos, Greece.jpg",
    bookmarked: false,
  },
  {
    id: 19,
    name: "Namib Desert",
    location: "Namibia",
    photo: "/assets/Namib Desert, Namibia.jpg",
    bookmarked: false,
  },
  {
    id: 20,
    name: "Newfoundland",
    location: "Canada",
    photo: "/assets/Newfoundland, Canada.jpg",
    bookmarked: false,
  },
];
const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: places,
  reducers: {
    bookmarkHandler(state, action) {
      const index = state.findIndex((obj) => obj.id === action.payload);
      state[index].bookmarked = !state[index].bookmarked;
    },
  },
});
export const { bookmarkHandler } = bookmarkSlice.actions;
const store = configureStore({
  reducer: { places: bookmarkSlice.reducer },
});
export default store;
