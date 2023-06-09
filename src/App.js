import { Home, Login, Public } from "./containers/public";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />}/>
          <Route path={path.LOGIN} element={<Login />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
