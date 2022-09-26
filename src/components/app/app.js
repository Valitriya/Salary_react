import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
  const data = [
    { name: "OlegGet", salary: 800, increase: true, id: 1 },
    { name: "morskoyzmei", salary: 5000, increase: false, id: 2 },
    { name: "Olya", salary: 3500, increase: false, id: 3 },
    { name: "Demetris", salary: 580, increase: false, id: 4 },
    { name: "Lex", salary: 999, increase: false, id: 5 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
