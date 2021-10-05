import React from 'react';
import styled from "styled-components/macro";
import TextFieldMui, { TextFieldProps } from "@mui/material/TextField";
import "./App.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

type BasicTextFieldProps = {
  basic: string;
};

type ExtendedTextFieldProps = TextFieldProps & ConditionalProps;

type ConditionalProps =
  | {
      dummy: number;
      foo?: never;
    }
  | {
      foo?: string;
    };

const StyledTextField = styled(TextFieldMui)<TextFieldProps & ConditionalProps>`
  & .MuiInputLabel-root {
    color: #bbac57;
    text-decoration: underline;
  }
`;

const CustomTextField = (
  props: TextFieldProps & BasicTextFieldProps & ConditionalProps
) => {
  console.log({ ...props });
  return <StyledTextField {...props} />;
};

function App() {
  return (
    <Wrapper>
      <Title>CustomTextField</Title>
      <CustomTextField basic="basic" />
      <CustomTextField placeholder="hold in there" basic="ola" />
      <CustomTextField basic="ola" dummy={9} foo="yeha" />
    </Wrapper>
  );
}

export default App;
