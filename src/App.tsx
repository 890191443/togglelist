import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Lists from "./pages/lists/Lists";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Lists />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
