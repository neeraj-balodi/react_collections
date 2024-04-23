import { useState } from "react";
import Notes from "./Components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Remember to practice React hooks regularly to solidify your understanding.",
    },
    {
      id: 2,
      text: "Practice solving algorithmic challenges to sharpen your problem-solving skills.",
    },
    {
      id: 3,
      text: "Don't forget to take breaks and maintain a healthy work-life balance to avoid burnout.",
    },
  ]);

  return (
    <div className="container mx-auto mt-8 p-10 ">
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
