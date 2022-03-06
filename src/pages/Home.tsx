import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, BottomDrawer, NewEvent, Calender } from "../components";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";

const AddEventBtn = styled.button`
  position: fixed;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 25px;
  color: #fff;
  z-index: 2;
  background: #ff6a3d;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  bottom: 0.5rem;
  right: 0.5rem;
`;

const Home = () => {
  const [toggleNewEvent, setToggleNewEvent] = useState(false);
  const [checkDrawer, setCheckDrawer] = useState(true);

  return (
    <>
      <Navbar />
      <AddEventBtn onClick={() => setToggleNewEvent(!toggleNewEvent)}>
        +
      </AddEventBtn>
      <Calender />
      <BottomDrawer setCheckDrawer={setCheckDrawer}></BottomDrawer>
      {toggleNewEvent ? (
        <NewEvent setToggleNewEvent={setToggleNewEvent} />
      ) : null}
    </>
  );
};

export default Home;
