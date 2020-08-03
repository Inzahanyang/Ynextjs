import axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import { Button, Input } from "antd";
import { useState, useCallback } from "react";
import Router from "next/router";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputSt = styled(Input)`
  padding: 20px;
  margin: 20px 20px;
  width: 50%;
`;

const Text = styled.div`
  font-size: 50px;
`;

const GetDouble = props => {
  return (
    <Container>
      <Text>{props.value}</Text>
      <Link href="/">
        <Button onClick={() => Router.back()}>돌아가기</Button>
      </Link>
    </Container>
  );
};

GetDouble.getInitialProps = async context => {
  const value = context.query.num;
  const res = await axios.get(`http://localhost:3000/api/double?value=${value}`);
  return {
    value: res.data.value,
  };
};

export default GetDouble;
