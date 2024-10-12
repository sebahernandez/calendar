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
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpDateEvent: (state, { payload }) => {
      state.events = state.events.map((event) =>
        event._id === payload._id ? payload : event
      );
    },
    onDeleteEvent: ( state ) => {
      if ( state.activeEvent ) {
          state.events = state.events.filter( event => event._id !== state.activeEvent._id );
          state.activeEvent = null;
      }
  }
  },
});

export const { onSetActiveEvent, onAddNewEvent, onUpDateEvent, onDeleteEvent } = calendarSlice.actions;
