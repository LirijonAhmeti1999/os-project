import { useAuthContext } from "@context/AuthContext/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Home, Login } from "./pages";

const queryClient = new QueryClient();

function App() {
  const { isAuthenticated } = useAuthContext();

  return (
    <QueryClientProvider client={queryClient}>
      {!isAuthenticated ? <Login /> : <Home />}

      {/* <ReactQueryDevtools /> */}
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
