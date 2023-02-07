import { Route, Routes } from "react-router-dom";
import "./App.css";
import Character from "./pages/Character";
import CharactersList from "./pages/CharactersList/CharactersList";
import Page404 from "./pages/page404";
import { Search } from "./components/search/search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<CharactersList />} />
          <Route path={"character/:id"} element={<Character />} />
          <Route path={"search"} element={<Search />} />
        </Route>

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
