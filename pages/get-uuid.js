import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LinkContainer = styled.div`
  margin-top: 40px;
`;

const GetUuid = props => {
  const getUuid = async () => {};
  return (
    <Container>
      {props.uuid}
      <LinkContainer>
        <Link href="/">
          <a>돌아가기</a>
        </Link>
      </LinkContainer>
    </Container>
  );
};

GetUuid.getInitialProps = async () => {
  const { data } = await axios.get("http://localhost:3000" + "/api/uuid");
  return {
    uuid: data.uuid,
  };
};

export default GetUuid;
