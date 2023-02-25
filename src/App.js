import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
