import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.tsx";
import "./index.css";
import UserContextProvider from "./context/UserToken.tsx";
import CartContextProvider from "./context/CartContext.tsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
);
