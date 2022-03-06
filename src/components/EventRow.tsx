import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: basline;
  margin: 1rem 0rem;

  & > div:nth-of-type(1) {
    flex: 1;
  }

  & > div:nth-of-type(1) > div:nth-of-type(1) {
    font-weight: bold;
  }

  & > div:nth-of-type(1) > div:nth-of-type(2) {
    color: #898989;
  }
`;

interface Props {
  duration: string;
  timing: string;
  heading: string;
  color: string;
  imageList: string[];
}

const EventRow: React.FC<Props> = ({
  duration,
  timing,
  heading,
  color,
  refresh,
  imageList = []
}) => {
  console.log("imageList", imageList);

  return (
    <Container>
      <div>
        <div>{timing}</div>
        <div>{duration}</div>
      </div>
      <Card
        width
        color={color}
        num={imageList.length || 6}
        heading={heading}
        imagelist={imageList.slice(0, 4)}
        refresh={refresh}
      >
        <div>57847584</div>
      </Card>
    </Container>
  );
};

export default EventRow;
