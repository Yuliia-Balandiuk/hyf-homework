import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Calendar = ({ date, setDate }) => {
  return (
    <CalendarWrapper onChange={(e) => setDate(e.target.value)}>
      <p>Deadline</p>
      <input type='date'></input>
    </CalendarWrapper>
  );
};

export default Calendar;
