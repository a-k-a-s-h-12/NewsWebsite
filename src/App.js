import { useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Mantra News";
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          key="general"
          element={<News category={"general"} country={"us"} />}
        />
        <Route
          exact
          path="/categories/general"
          key="generals"
          element={<News category={"general"} country={"us"} />}
        />
        <Route
          exact
          path="/categories/business"
          key="business"
          element={<News category={"business"} country={"us"} />}
        />
        <Route
          exact
          path="/categories/sports"
          key="sports"
          element={<News category={"sports"} country={"us"} />}
        />
        <Route
          exact
          path="/categories/science"
          key="science"
          element={<News category={"science"} country={"us"} />}
        />
        <Route
          exact
          path="/categories/health"
          key="health"
          element={<News category={"health"} country={"us"} />}
        />
        <Route
          exact
          path="/categories/entertainment"
          key="entertainment"
          element={<News category={"entertainment"} country={"us"} />}
        />
        <Route
          exact
          path="/categories/technology"
          key="technology"
          element={<News category={"technology"} country={"us"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
