import styled from "styled-components";
import skillsItems from "../providers/skills";

// deprecated

export default () => (
  <Wrapper>
    {skillsItems.map((skill) => (
      <Skill>
        <h4>{skill.title}</h4>
        <DescriptionSection>
          <Titles>
            <image src={skill.img}/>
          </Titles>
          <Descriptions>
            <span>{skill.list}</span>
            <span className="competence">{skill.competence}</span>
          </Descriptions>
        </DescriptionSection>
      </Skill>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: aliceblue;

  h3 {
    font-style: italic;
  }
`;

const Skill = styled.div`
  width: 60%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: cornflowerblue;
  }

  .sub_title {
    font-style: italic;
    color: #c2a82a;
  }
`;

const DescriptionSection = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

const Titles = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  span {
    color: #f08f8f;
    font-weight: bold;
    font-style: italic;
  }
`;

const Descriptions = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;

  .years {
    margin-top: 5px;
    font-style: italic;
  }
`;
