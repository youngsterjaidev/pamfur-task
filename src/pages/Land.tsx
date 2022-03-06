import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { AiOutlineArrowRight } from "react-icons/ai";

const Container = styled.div``;

const Greet = styled.div`
  background-color: #fff;
  color: #000;
  position: fixed;
  padding: 1rem;
  border-radius: 1rem 1rem 0rem 0rem;
  bottom: 0;
`;

const Skip = styled(Link)`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0.5rem 0rem 0rem 0.5rem;
  font-size: 2rem;
  color: #fff;
  display: grid;
  place-items: center;
  background-color: #ff6a3d;
  border-radius: 50rem 0rem 0rem 0rem;
`;

const Heading = styled.h1`
  padding: 1rem;
`;

const Land = () => {
  return (
    <Container>
      <Heading>
        <b style={{ color: "#6A777C" }}>Calender</b> 2017
      </Heading>
      <Greet>
        <h3>Hi Aman</h3>
        <p>
          Welcome to your daily event calendar. Be more engaging & personalised
          than ever before. We’ll help you in Tracking Upcoming Events,
          Scheduling Meetings & Creating New Event!
        </p>
        <Skip to="/home">
          <AiOutlineArrowRight size={24} />
        </Skip>
      </Greet>
    </Container>
  );
};

export default Land;
