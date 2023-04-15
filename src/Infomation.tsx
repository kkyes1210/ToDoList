import styled from "styled-components";

const Wrapper = styled.div`
  //background-color: red;
  position: absolute;
  bottom: 7.5vh;
  right: 1vw;
  min-height: 100px;
  min-width: 200px;
  //height: 18vh;
  text-align: right;
`;

const Name = styled.div`
  //background-color: yellow;
  font-size: 2.5em;
  font-weight: 300;
`;

const Info = styled.div`
  //background-color: pink;
  font-size: 2.5em;
  font-weight: 200;
`;

const Exp = styled.div`
  //background-color: blanchedalmond;
  font-size: 1.2em;
  font-weight: 400;
  padding-top: 8px;
`;

function Information() {
  return (
    <Wrapper>
      <Name>Eunseon, Yu</Name>
      <Info>Frontend Engineer</Info>
      <Exp>creative tech enthusiast</Exp>
    </Wrapper>
  );
}

export default Information;
