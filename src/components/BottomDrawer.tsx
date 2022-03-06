import React from "react";
import styled from "styled-components";
import { Illustrations } from "../assets";
import Card from "./Card";
import EventRow from "./EventRow";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";

const Container = styled.div`
  width: 100%;
  height: 75vh;
  touch-action: none;
  border-radius: 1rem 1rem 0px 0px;
  background-color: #fff;
  padding: 0.1rem 1rem 1rem 1rem;
  position: fixed;
  overflow-y: scroll;
  bottom: 0;
  color: #000;
`;

const Hr = styled.hr`
  margin-top: 0.3rem;
  width: 3rem;
  border-radius: 5px;
  position: sticky;
  top: 0;
  border: 1px solid #dadada;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-flow: row nowrap;
  align-items: center;
  overflow-x: scroll;
  padding: 1rem 1rem 1rem 0rem;
`;

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0em;
`;

const imageList = [
  Illustrations.ProfilePic,
  Illustrations.ProfilePic,
  Illustrations.ProfilePic,
  Illustrations.ProfilePic,
  Illustrations.ProfilePic,
  Illustrations.ProfilePic,
  Illustrations.ProfilePic,
  Illustrations.ProfilePic
];

const TodayEvents = [
  {
    title: "Design Scrum",
    timing: "11:00 am",
    duration: "45 mins",
    phone: "456 676 7889",
    color: "#FFE0E0",
    refresh: true
  },
  {
    title: " Q2 Planning",
    timing: "01:20 pm",
    duration: "60 mins",
    phone: "123 456 7890",
    color: "#FFE8AC",
    refresh: true
  },
  {
    title: "coldpay concert",
    timing: "09:20 am",
    duration: "120 mins",
    phone: "",
    color: "#E5FFFA",
    refresh: false
  }
];

interface Props {
  setCheckDrawer: any;
}

const BottomDrawer: React.FC<Props> = ({ setCheckDrawer }) => {
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0
  }));

  const height = window.innerHeight;

  const open = () => {
    api.start({
      y: 312,
      immediate: false
    });
    setCheckDrawer(false);
  };

  const close = () => {
    const newHeight = height * 0.85 - (55 - height * 0.01);
    api.start({
      y: newHeight,
      immediate: false
    });

    setCheckDrawer(true);
  };

  const bind = useDrag(
    ({
      movement: [, my],
      velocity: [, vy],
      direction: [, dy],
      offset: [ox, oy],
      last,
      memo,
      cancel,
      canceled,
      event
    }) => {
      if (oy > 312) {
        open();
        return;
      }

      if (oy < 312) {
        close();
      }

      console.log("event");
      api.start({ x: ox, y: oy });
    },
    {
      from: [312, y.get()],
      bounds: { top: 0, left: 0 }
    }
  );

  return (
    <Container as={animated.div} {...bind()} style={{ y }}>
      <Hr />
      <h4>Upcomming Events (3)</h4>
      <CardWrapper>
        <Card
          num={imageList.length}
          color="#FFE0E0"
          heading="anything"
          imagelist={imageList.slice(0, 4)}
        >
          <div>11:00 am (45 mins)</div>
        </Card>
        <Card
          num={imageList.length}
          color="#FFE8AC"
          heading="anything"
          imagelist={imageList.slice(0, 4)}
        >
          <div>11:00 am (45 mins)</div>
        </Card>
        <Card
          num={imageList.length}
          heading="anything"
          color="#E5FFFA"
          imagelist={imageList.slice(0, 4)}
        >
          <div>11:00 am (45 mins)</div>
        </Card>
        <Card
          num={imageList.length}
          heading="anything"
          color="#E5FFFA"
          imagelist={imageList.slice(0, 4)}
        />
      </CardWrapper>
      <div>
        <Row>
          <div>
            <b>Today</b>, Thursday 21
          </div>
          <div>31/25</div>
        </Row>
        {TodayEvents.map((item) => {
          console.log(item);
          return (
            <EventRow
              color={item.color}
              heading={item.title}
              duration={item.duration}
              timing={item.timing}
              refresh={item.refresh}
              imageList={imageList}
            />
          );
        })}
      </div>
      <div>
        <Row>
          <div>
            <b>Tomorrow</b>, Friday 22
          </div>
          <div>31/25</div>
        </Row>
        <div>No Events</div>
      </div>
    </Container>
  );
};

export default BottomDrawer;
