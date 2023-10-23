import { useDispatch } from "react-redux";
import { forgot } from "../../redux/auth/operations";
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  Wrapper,
  Background,
  Title,
  Forgot,
  Text,
  Span,
  Link,
} from "../LoginForm/LoginForm.styled";

export const ForgotForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      forgot({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Background className="slide-in-left" />
      <FormStyled
        className="slide-in-blurred-right"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Title>Change password</Title>
        <LabelStyled>
          Email
          <InputStyled placeholder="Email" type="email" name="email" />
        </LabelStyled>
        <LabelStyled>
          Password
          <InputStyled placeholder="Password" type="password" name="password" />
        </LabelStyled>
        <Forgot style={{ opacity: "0", pointerEvents: "none" }}></Forgot>
        <ButtonStyled type="submit">Submit</ButtonStyled>
        <Text>
          <Span>Don’t have account?</Span>
          <Link to="/auth/signup">Sign Up</Link>
        </Text>
      </FormStyled>
    </Wrapper>
  );
};
