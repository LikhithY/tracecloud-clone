import "./App.css";
import { Routes, Route } from "react-router-dom";
import Tools from "./Routes/Tools";
import Status from "./Routes/Status";
import Comments from "./Routes/Comments";
import Changes from "./Routes/Changes";
import Home from "./Routes/Home";
import Release from "./Routes/Release";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<Tools />} />
        <Route path="status" element={<Status />} />
        <Route path="comments" element={<Comments />} />
        <Route path="changes" element={<Changes />} />
      </Route>
      <Route path="/releaseform" element={<Release />} />
    </Routes>
  );
}

export default App;
