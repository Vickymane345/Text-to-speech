import Home from "./Home/page";
import { MessageProvider } from "./Hooks/MessageContext";

export default function Main() {
  return (
    <MessageProvider>
      <Home />
    </MessageProvider>
  );
}
