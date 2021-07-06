import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home.js";
import PatientList from "./components/patients/PatientList";
import MainContent from "./components/mainContent/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div class="container" style={{margin: 0, padding: 0}}>
        <div class="row">
          <div class="col-sm">
            <Sidebar />
          </div>
          <div class="col-sm">
            <MainContent />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/PatientList" component={PatientList} exact />
              {/* <Route path="/FormPage" component={FormPage} exact />
            <Route path="/MainContent" component={MainContent} exact />
            <Route path="/TableCourse" component={TableContentOnModal} exact />
            <Route path="/WebApiASP" component={WebApiASP} exact />
            <Route path="/WebApiASP/Department" component={Department} exact />
            <Route path="/WebApiASP/Employee" component={Employee} exact />
            <Route path="/PR/PRList" component={PRList} exact />
            <Route path="/PR/PRAdd" component={PRAdd} exact /> */}
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
