import { ThemeProvider } from "@mui/material";
import "./App.css";
import AppRouter from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "./theme/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
