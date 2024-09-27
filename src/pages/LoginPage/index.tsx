import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.scss";
import { TextField, Button, Typography, Link } from "@mui/material";

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
        const { accessToken } = response.data;
        localStorage.setItem("token", accessToken);

        navigate("/dashboard");
      },

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
    <div className={styles.loginPage}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <Typography variant="h5" component="h1">
          Log in
        </Typography>
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <TextField
          label="Email address"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          type="email"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          type="password"
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          type="submit"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Logging in..." : "Log in"}
        </Button>
        <div className={styles.bottomLinks}>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
          <Typography variant="body2">
            Don't have an account? <Link href="#">Register</Link>
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
