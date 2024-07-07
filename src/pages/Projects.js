import styled from 'styled-components';
import projects from '../providers/projects';

export default () =>
  <Wrapper>
    <h3>Projects</h3>
    {
      projects.map((p, k) => {
        return <Project>
          <h4>{p.title}</h4>
          <span>{p.period}</span>
          <DescriptionSection>
            <Titles>
              <span>role:</span>
              <span>stack:</span>
            </Titles>
            <Descriptions>
              <span>{p.description}</span>
              <span className="stack">{p.stack}</span>
            </Descriptions>
          </DescriptionSection>
        </Project>
      })
    }
  </Wrapper>

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

const Project = styled.div`
  width: 100%;
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
  }
`;

const Descriptions = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  
  .stack {
    margin-top: 5px;
    font-style: italic;
  }
`;
