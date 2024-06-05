import { useState } from "react";
import SubjectDetails from "./component/SubjectDetails";
import "./App.css";

function App() {
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState("");

  const [subjects, setSubjects] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let copyArray = [...subjects];
    copyArray.push({
      subject: subject,
      hour : parseInt(hour),
    })
    
    setSubjects(copyArray);
  };

  const increaseHour = (index) => {
    let copyArray = [...subjects];
    copyArray[index]["hour"] += 1;
    setSubjects(copyArray);
  };

  const decreaseHour = (index) => {
    let copyArray = [...subjects];
    copyArray[index]["hour"] -= 1;
    setSubjects(copyArray);
  };

  return (
    <>
      <div>
        <h1>Geekster Education Planner</h1>
        <form className="content" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setSubject(e.currentTarget.value)}
            type="text"
            placeholder="Subject"
          />
          <input
            onChange={(e) => setHour(e.currentTarget.value)}
            type="number"
            placeholder="Hours"
            min={0}
          />
          <input type="submit" value="Add" />
        </form>
        {subjects.map((item, index) => (
          <SubjectDetails
            increase={increaseHour}
            decrease={decreaseHour}
            subject={item.subject}
            hour={item.hour}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
