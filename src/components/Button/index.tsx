import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends Omit<ButtonProps, "children"> {
  mutation?: any;
  children: any;
}

const CustomButton = ({
  variant = "contained",
  mutation,
  type = "button",
  fullWidth = true,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      disabled={mutation?.isLoading}
      {...rest}
    >
      {mutation?.isLoading ? "Loading..." : children}
    </Button>
  );
};

export default CustomButton;
