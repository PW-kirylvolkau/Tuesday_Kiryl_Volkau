import React, {useState} from 'react';
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
    const [needUpdate, setNeedUpdate] = useState(true);

  return (
    <div id="App">
        <EmployeeForm setUpd={setNeedUpdate}/>
        <EmployeeList setUpd={setNeedUpdate} updateNeeded={needUpdate}/>
    </div>
  );
}

export default App;
