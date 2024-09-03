import TabsPanel from "./components/tabs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <TabsPanel />
      <ToastContainer />
    </div>
  );
}

export default App;
