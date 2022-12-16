import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className="folder"
          onClick={() => {
            setExpand(true);
          }}
        >
          {" "}
          <span> 📂{explorer.name}</span>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📝{explorer.name} </span>;
  }
}

export default Folder;
