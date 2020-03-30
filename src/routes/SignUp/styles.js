import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  width: 80%;
`;

export const FormContainer = styled.form`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const StyledField = styled(TextField)`
  color: white;
`;

export const SignUpButton = styled.button`
  text-decoration: none;
  text-align: center;
  float: right;
  background-color: #7289da;
  color: white;
  padding: 5px;
  width: 30%;
  border-radius: 5px;
`;

export const Button = styled(Link)`
  position: relative;
  top: 40px;
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #7289da;
  background-color: #7289da;
  text-decoration: none;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: 0 auto;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

export const LoginText = styled.div`
  text-align: center;
  position: relative;
  top: 60px;
  text-decoration: none;
`;

export const Login = styled(Link)`
  text-decoration: none;
  color: #7289da;
`;

export const Title = styled.div`
  position: relaitve;
  text-align: center;
`;
