import { useState } from "react";
import { Card, Table, Button, Modal, Form } from "react-bootstrap";

function YourAppointment() {
  const [modalShow, setModalShow] = useState(false);

  function AppointmentFormModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Application Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="selectDoctor">
              <Form.Label>Select Doctor</Form.Label>
              <Form.Control as="select">
                <option value="a">Dr. A</option>
                <option value="b">Dr. B</option>
                <option value="c">Dr. C</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" className="mb-3" controlId="date">
              <Form.Label>Select Appointment Date</Form.Label>
              <Form.Control type="date" name="date" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="textAreaDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={props.onHide}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }

  return (
    <>
      <AppointmentFormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Card className="w-100" style={{ minHeight: "85vh" }}>
        <Card.Header className="d-flex justify-content-between">
          <h3>Your Appointment</h3>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Apply
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td className="d-flex justify-content-center">
                    <Button variant="danger">Cancel</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default YourAppointment;
