import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends Omit<ButtonProps, "children"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutation?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
