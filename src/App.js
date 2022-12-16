import "./styles.css";
import { useState } from "react";
import explorer from "./data/FolderData.js";
import Folder from "./components/Folder";
export default function App() {
  const [exploreData, setexplorerData] = useState(explorer);

  return (
    <div className="App">
      <Folder explorer={exploreData} />
    </div>
  );
}
