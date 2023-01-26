import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import { Routes } from "./routes/Routes";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />

      {/* <ReactQueryDevtools /> */}
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
