import styled from "styled-components";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  //background-color: red;
  position: absolute;
  top: 7.5vh;
  left: 1vw;
  min-height: 100px;
  min-width: 200px;
  height: 18vh;
`;

const RightBox = styled.div`
  //background-color: green;
  float: right;
  padding-left: 10px;
`;

const TDate = styled.div`
  //background-color: yellow;
  height: 100%;
  float: left;
  font-size: 6em;
`;

const Day = styled.div`
  //background-color: blue;
  height: 50%;
  font-size: 3em;
`;

const Month = styled.div`
  //background-color: orange;
  height: 50%;
  font-size: 3em;
`;

function Today() {
  const [month, setDisplayMonth] = useState("");
  const [day, setDisplayDay] = useState("");
  const [date, setDisplayDate] = useState(1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  useEffect(() => {
    const now = new Date();
    setDisplayMonth(months[now.getMonth()]);
    setDisplayDay(days[now.getDay()]);
    setDisplayDate(now.getDate());
  }, []);

  return (
    <Wrapper>
      <TDate>{date}</TDate>
      <RightBox>
        <Day>{day.toUpperCase()}</Day>
        <Month>{month.toUpperCase()}</Month>
      </RightBox>
    </Wrapper>
  );
}
export default Today;
