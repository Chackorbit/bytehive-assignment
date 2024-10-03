import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Link } from "@mui/material";
import Input from "../../components/Input";
import CustomButton from "../../components/Button";
import theme from "../../theme/theme";
import { BottomLinks, LoginForm, LoginPageContainer } from "./LoginPage.styles";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const mutation = useMutation(
    (data: { email: string; password: string }) => {
      return axios.post(
        "https://interview-api-8icc.onrender.com/api/auth/login",
        data
      );
    },
    {
      onSuccess: (response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);

        navigate("/dashboard");
      },

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (err: any) => {
        setError(err?.response?.data?.message || "Invalid login credentials");
      },
    }
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    mutation.mutate({ email, password });
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleLogin}>
        {" "}
        <Typography variant="h5" component="h1">
          Log in
        </Typography>
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Typography variant="body2">
          Don't have an account?{" "}
          <Link
            sx={{
              color: theme.palette.secondary.main,
              textDecoration: "none",
            }}
            href="#"
          >
            Register
          </Link>
        </Typography>
        <Input
          label="Email address"
          value={email}
          setValue={setEmail}
          type="email"
        />
        <Input
          label="Password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <CustomButton
          type="submit"
          mutation={mutation}
          sx={{
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          {mutation.isLoading ? "Logging in..." : "Log in"}
        </CustomButton>
        <BottomLinks>
          <Link
            href="#"
            variant="body2"
            sx={{
              color: theme.palette.secondary.main,
              textDecoration: "none",
            }}
          >
            Forgot password?
          </Link>
        </BottomLinks>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
