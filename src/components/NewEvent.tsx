import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack, IoIosAttach } from "react-icons/io";
import { IoPeopleOutline, IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { Illustrations } from "../assets";

const Container = styled.div`
  align-items: center;
  transition: all 2s linear;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  visibility: visible;
`;

const CloseWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Content = styled.div`
  background: #ffffff;
  color: #000;
  width: 100%;
  height: 60vh;
  overflow-y: auto;
  bottom: 0;
  border-radius: 1rem 1rem 0rem 0rem;
  position: fixed;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
`;

const Stripe = styled(Row)`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ContentNavbar = styled.div`
  display: flex;
  place-items: center;
  position: sticky;
  top: 0;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
`;

const Form = styled.form`
  padding: 0.6rem 1rem;
`;

const Input = styled.input`
  padding: 0.6rem;
  width: 100%;
  background: #2b4047;
  border-radius: 1rem;
  opacity: 0.1;

  &:placeholder-shown {
    color: #bbbbbb;
  }
`;

const Heading = styled.div`
  font-weight: bold;
  margin: 0rem 0.5rem;
`;

interface Props {
  setToggleNewEvent: any;
}

const NewEvent: React.FC<Props> = ({ setToggleNewEvent }) => {
  return (
    <Container>
      <CloseWrapper onClick={() => setToggleNewEvent(false)}></CloseWrapper>
      <Content>
        <ContentNavbar onClick={() => setToggleNewEvent(false)}>
          <div>
            <AiOutlineClose size={24} />
          </div>
          <Heading>New Event</Heading>
        </ContentNavbar>
        <div>
          <Form>
            <Input type="text" placeholder="add title" />
          </Form>
        </div>
        <Stripe>
          <Row>
            <IoPeopleOutline size={25} />
            Invite People
          </Row>
          <div>
            <img src={Illustrations.Forward} alt="" />
          </div>
        </Stripe>
        <Stripe style={{ alignItems: "flex-start" }}>
          <div>
            <FiClock size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <div>All Day</div>
            <div>Thursday September 21</div>
            <div>Thursday September 21</div>
          </div>
          <div>
            <div></div>
            <div>2:30 PM</div>
            <div>2:30 PM</div>
          </div>
        </Stripe>
        <Stripe>
          <Row>
            <IoLocationOutline size={24} />
            Loaction
          </Row>
          <div>
            <img src={Illustrations.Forward} alt="" />
          </div>
        </Stripe>
        <Stripe>
          <div>Agenda</div>
          <div>
            <img src={Illustrations.Forward} alt="" />
          </div>
        </Stripe>
        <Stripe>
          <Row>
            <IoIosAttach size={24} />
            Add Attachment
          </Row>
          <div>
            <img src={Illustrations.Forward} alt="" />
          </div>
        </Stripe>
      </Content>
    </Container>
  );
};

export default NewEvent;
