import React from "react";
import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.color};
  opacity: 0.9;
  width: 100%;
  min-width: ${(props) => (props.width ? `${props.width}%` : `200px`)};
  padding: 0.1rem 0.1rem 0.1rem 1.6rem;
  border-radius: 1rem;
  position: relative;
  z-index: 1;
  flex: 3;
  min-height: 80px;

  &::before {
    content: "";
    border-right: 1rem solid
      ${(props) => {
        if (props.color === "#FFE0E0") {
          return "#ff000075";
        }
        if (props.color === "#FFE8AC") {
          return "#ffcc45";
        }

        return "#93f7e4";
      }};
    border-radius: 1rem 0rem 0rem 1rem;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    color: red;
  }
`;

const Heading = styled.h4`
  margin: 0.2rem 0rem;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 10px);
`;

const NumberOfParticipant = styled.div`
  width: 24px;
  height: 24px;
  background-color: #fff;
  color: #000;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const Refresh = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
`;

const Tail = styled.div`
  padding: 0.5rem 0rem;
`;

interface Props {
  imagelist: string[];
  heading: string;
  num: number;
  color: string;
  refresh?: boolean;
}

interface ContainerProps {
  width: boolean | undefined;
  color: string;
}

const Card: React.FC<Props> = ({
  heading,
  num,
  imagelist,
  refresh,
  color,
  children
}) => {
  console.log("Color ----", color);

  return (
    <Container color={color}>
      {refresh ? (
        <Refresh>
          <BiRefresh />
        </Refresh>
      ) : null}
      <Heading>{heading}</Heading>
      <ProfileWrapper>
        {imagelist.map((image) => {
          return <img src={image} alt="" />;
        })}
        {num > 5 ? (
          <NumberOfParticipant>{`${num - 6}+`}</NumberOfParticipant>
        ) : null}
      </ProfileWrapper>
      <Tail>{children}</Tail>
    </Container>
  );
};

export default Card;
