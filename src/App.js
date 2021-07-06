import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home.js";
import DoctorList from "./components/doctors/DoctorList";
import PatientList from "./components/patients/PatientList";
import AppointMentList from "./components/appointments/AppointmentList";
import YourAppointment from "./components/appointments/YourAppointment";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div class="w-100 h-100" style={{ margin: 0, padding: 0 }}>
      <div class="row">
        <div class="col-2 p-0">
          <Sidebar />
        </div>
        <div class="col-10 p-0">
          <Header />
          <Container
            fluid
            style={{
              minHeight: "80vh",
              marginTop: "2rem",
              marginHorizontal: "2rem",
            }}
          >
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/DoctorList" component={DoctorList} exact />
                <Route path="/PatientList" component={PatientList} exact />
                <Route
                  path="/AppointmentList"
                  component={AppointMentList}
                  exact
                />
                <Route
                  path="/YourAppointment"
                  component={YourAppointment}
                  exact
                />
              </Switch>
            </BrowserRouter>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
