import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AllEventsPage from "./pages/AllEventsPage.jsx";
import AllCommentPage from "./pages/AllCommentPage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/allevents" element={<AllEventsPage />}></Route>
        <Route path="/allcomments" element={<AllCommentPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
