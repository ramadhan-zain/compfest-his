function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ maxWidth: "20rem", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Hi, Admin</span>
      </a>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/" className="nav-link text-white" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="/DoctorList" className="nav-link text-white">
            Doctors
          </a>
        </li>
        <li>
          <a href="/PatientList" className="nav-link text-white">
            Patients
          </a>
        </li>
        <li>
          <a href="/AppointmentList" className="nav-link text-white">
            Find a Doctor
          </a>
        </li>
        <li>
          <a href="/YourAppointment" className="nav-link text-white">
            Your Appointments
          </a>
        </li>
      </ul>
      <hr></hr>
      <ul className="nav nav-pills flex-column">
        <li>
          <a href="#" className="nav-link text-white">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
