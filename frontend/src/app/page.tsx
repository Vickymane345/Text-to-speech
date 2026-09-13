import Home from "./components/home";
import { MessageProvider } from "./Hooks/MessageContext";

export default function Main() {
  return (
    <MessageProvider>
      <Home />
    </MessageProvider>
  );
}
