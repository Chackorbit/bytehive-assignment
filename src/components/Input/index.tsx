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
        backgroundColor: "#FFFFFF", // Постійний білий фон
        borderRadius: "10px", // Закруглені кути
        border: "1px solid #E0E0E0", // Загальний бордер 1px
        "& .MuiInputBase-root": {
          backgroundColor: "#fff", // Білий фон для всіх станів
          borderRadius: "10px", // Закруглені кути
          color: "#111927",
        },
        "& .MuiFilledInput-root::after, & .MuiFilledInput-root::before": {
          display: "none", // Вимкнення псевдоелементів для filled варіанту
        },
        "& .MuiFilledInput-root": {
          backgroundColor: "#fff", // Білий фон при filled варіанті
          borderRadius: "10px", // Закруглені кути
          border: "none", // Відсутність стандартного бордера
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none", // Відсутність нижнього бордера
        },
        "& .MuiInputLabel-root": {
          color: "#6C737F", // Колір тексту лейблу
        },
        "&:hover .MuiInputBase-root": {
          backgroundColor: "#FFFFFF", // Залишається білим при ховері
        },
        "&.Mui-focused .MuiInputBase-root": {
          backgroundColor: "#FFFFFF", // Білий фон при фокусі
          boxShadow: "none", // Вимкнення тіні
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #E0E0E0", // Загальний бордер навіть при фокусі
        },
        "& input:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #fff inset !important", // Білий фон для автозаповнених полів
          //   WebkitTextFillColor: "#000 !important", // Чорний текст для автозаповнення
          borderRadius: "10px", // Закруглені кути для автозаповнених полів
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
