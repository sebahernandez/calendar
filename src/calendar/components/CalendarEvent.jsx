export const CalendarEvent = ({ event }) => {
  const { title, user, notes } = event;
  return (
    <>
      <strong>{title}</strong>
      <p>{notes}</p>
    </>
  );
};
