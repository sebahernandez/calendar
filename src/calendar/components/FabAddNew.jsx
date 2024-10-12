import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

 const {openDateModal} = useUiStore();
 const {setActiveEvent} = useCalendarStore();

 const handleClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: addHours(new Date(),2) ,
      end: new Date(),
      user: {
        _id: "123",
        name: "Fernando"
      }
    });
    openDateModal();
 }

  return (
     <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
     </button>
  )
}
