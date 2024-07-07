import React from 'react';
import styled from "styled-components";
import { about_me_items } from "../providers/about_me";

export default () => {
  const [state, setState] = React.useState("all");
  console.log('state: ', state);

  return <Wrapper>
    <Select
      name="category"
      id="category"
      value={state}
      onChange={e => {
        setState(e.target.value)
      }}
    >
      <option value="all">All</option>
      <option value="corporate">Corporate experience</option>
      <option value="cs_journey">My journey in computer science</option>
      <option value="other">Other</option>
    </Select>
    <AboutMe>
      {

        about_me_items.map((i, k) => {
          // return <p key={k}>{i.title}</p>
          return <AboutMeItem i={k}>
            <span className="title">{i.title}</span>
            <span>{i.description}</span>
          </AboutMeItem>
        }
        )
      }
    </AboutMe>
  </Wrapper>
}

const Wrapper = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: aliceblue;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: aliceblue;
`;

const Select = styled.select`
  text-align: center;
`;

const AboutMeItem = styled.div`
  width: 60%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 15px;
  background: #e5f2ff;
  text-align: center;

  .title {
    font-weight: bold;
    font-style: italic;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
  }
`;
