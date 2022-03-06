import React from "react";
import styled from "styled-components";
import { Link, navigate } from "@reach/router";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Illustrations } from "../assets";
import { IoNavigate } from "react-icons/io5";

const Nav = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #162b32;
  padding: 1rem 0.5rem;

  & > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  & > div > div:nth-of-type(3) {
    display: flex;
    margin: 0em 0.3rem;
    flex-flow: row nowrap;
    align-items: center;
    background: #2b4047;
    padding: 0.5rem;
    border-radius: 50px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <div>
          <IoIosArrowBack
            onClick={() => {
              navigate("/");
            }}
            size={22}
          />
        </div>
        <div>2021</div>
        <div>
          <div>September</div>
          <IoIosArrowDown size={22} />
        </div>
      </div>
      <div>
        <img src={Illustrations.ProfilePic} alt="profile picture" />
      </div>
    </Nav>
  );
};

export default Navbar;
