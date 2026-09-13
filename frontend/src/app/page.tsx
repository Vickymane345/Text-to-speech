import Home from "./Home/page";
import { MessageProvider } from "./Hooks/page";

export default function Main() {
  return (
    <MessageProvider>
      <Home />
    </MessageProvider>
  );
}
