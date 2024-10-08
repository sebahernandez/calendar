import { addHours } from "date-fns";
import { createSlice } from "@reduxjs/toolkit";

const tempEvent = {
  _id: new Date().getTime(),
  title: "Cancha de futbol",
  notes: "Inter de miami",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Sebastian",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },

  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

export const { onSetActiveEvent } = calendarSlice.actions;
