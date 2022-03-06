import React, { useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styled from "styled-components";
import { Link } from "@reach/router";
import { AiOutlineArrowRight } from "react-icons/ai";

const Container = styled.div``;

const Greet = styled.div`
  background-color: #fff;
  width: 100vw;
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
  display: flex;
  gap: 1rem;
  flex-flow: row nowrap;
  align-items: center;
`;

const Land = () => {
  const [flip, set] = useState(false);

  const words = ["2017", "2018", "2019", "2020"];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip)
  });

  return (
    <Container>
      <Heading>
        <b style={{ color: "#6A777C" }}>Calender</b>{" "}
        <animated.div
          style={{
            position: "relative",
            height: 50,
            overflow: "hidden",
            fontSize: "1.8rem"
          }}
          scrollTop={scroll}
        >
          {words.map((word, i) => (
            <div
              key={`${word}_${i}`}
              style={{ width: "100%", height: 50, textAlign: "center" }}
            >
              {word}
            </div>
          ))}
        </animated.div>
      </Heading>
      <Greet>
        <h3>Hi Aman</h3>
        <p>
          Welcome to your daily event calendar. Be more engaging & personalised
          than ever before. We’ll help you in{" "}
          <b>
            Tracking Upcoming Events, Scheduling Meetings & Creating New Event!
          </b>
        </p>
        <Skip to="/home">
          <AiOutlineArrowRight size={24} />
        </Skip>
      </Greet>
    </Container>
  );
};

export default Land;
