import { TextField, TextFieldProps } from "@mui/material";

interface InputProps extends Omit<TextFieldProps, "value" | "onChange"> {
  value: string;
  setValue: (value: string) => void;
}

const Input = ({
  value,
  setValue,
  label,
  fullWidth = true,
  margin = "normal",
  type,
  ...rest
}: InputProps) => {
  return (
    <TextField
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        border: "1px solid #E0E0E0",
        "& .MuiInputBase-root": {
          backgroundColor: "#fff",
          borderRadius: "10px",
          color: "#111927",
        },
        "& .MuiFilledInput-root::after, & .MuiFilledInput-root::before": {
          display: "none",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "none",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiInputLabel-root": {
          color: "#6C737F",
        },
        "&:hover .MuiInputBase-root": {
          backgroundColor: "#FFFFFF",
        },
        "&.Mui-focused .MuiInputBase-root": {
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #E0E0E0",
        },
        "& input:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #fff inset !important",

          borderRadius: "10px",
        },
      }}
      label={label}
      variant="filled"
      fullWidth={fullWidth}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      margin={margin}
      type={type}
      {...rest}
    />
  );
};

export default Input;
