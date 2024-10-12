import { useSelector, useDispatch } from "react-redux";
import { onDeleteEvent, onSetActiveEvent, onUpDateEvent } from "../store";
import { onAddNewEvent } from "../store";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = (calendarEvent) => {
    // TODO: llegar al backend

    if (calendarEvent._id) {
      dispatch(onUpDateEvent({...calendarEvent}))
    } else {
      // Creando
      dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}));
    }
  }

  const startDeleteEvent = () => {
    // TODO: llegar al backend
    dispatch( onDeleteEvent() );
  } 

  return {
    // * Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,


    //* Métodos
    startDeleteEvent,
    setActiveEvent,
    startSavingEvent,
  };
};
