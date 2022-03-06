import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Heading = styled.h2`
  padding: 0.5rem;
`;

const Weekdays = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(7, minmax(20px, 1fr));
  margin: 0;
  padding: 1rem 0.4rem;

  & > li {
    color: white;
    text-align: center;
  }
`;

const Days = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(7, minmax(20px, 1fr));
  margin: 0;
  padding: 0;

  & > li {
    color: white;
    padding: 0.3rem;
    font-weight: bold;
    height: 4rem;
    display: grid;
    border-radius: 8rem;
    place-items: center;
  }
`;

const Calender = () => {
  return (
    <Container>
      <Weekdays>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </Weekdays>

      <Days>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li style={{ backgroundColor: "#fff", color: "#000" }}>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
      </Days>

      <Heading>October</Heading>

      <Days>
        <li></li>
        <li></li>
        <li></li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li style={{ backgroundColor: "#fff", color: "#000" }}>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
      </Days>
    </Container>
  );
};

export default Calender;
