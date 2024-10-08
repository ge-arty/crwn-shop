import { Route, Routes } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
