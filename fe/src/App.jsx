import { Route, Routes } from "react-router-dom";
import CreatePage from "./page/createpage";
import Homepage from "./page/homepage";
import NoteDetailPage from "./page/NoteDetailPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
