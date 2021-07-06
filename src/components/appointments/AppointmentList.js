import { useState } from "react";
import { Card, Table, Button, Form, Modal } from "react-bootstrap";

function AppointMentList() {
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
            <Form.Group className="mb-3" controlId="formDoctorName">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control type="text" readOnly />
            </Form.Group>
            <Form.Group className="mb-3" className="mb-3" controlId="date">
              <Form.Label>Select Appointment Date</Form.Label>
              <Form.Control type="date" name="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="textAreaDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={props.onHide}>
              Apply
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }

  return (
    <>
      <Card className="w-100" style={{ minHeight: "85vh" }}>
        <Card.Header className="d-flex justify-content-between">
          <h3>Find a Doctor</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Doctor</th>
                  <th>Specialty</th>
                  <th>Availability</th>
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
                    <Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Apply
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
      <AppointmentFormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AppointMentList;
