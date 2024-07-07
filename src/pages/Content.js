import styled from "styled-components";
import content_items from "../providers/content";

export default () => (
  <Wrapper>
    {content_items.map((i, k) => {
      // return <p key={k}>{i.title}</p>
      return (
        <ContentBlock>
          <span>{i.title}</span>
          <iframe width="560" height="315" src={i.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ContentBlock>
      );
    })}
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 25px;
  background: aliceblue;
`;

const ContentBlock = styled.div`
  padding: 10px;

  span {
    display: block;
    margin-bottom: 5px;
  }
`;
