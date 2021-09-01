import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import EnquireForm from "./EnquireForm";

export function EnquireModal(props) {
  return (
    <Modal className="enquire-container"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="enquire-container__heading-one">Enquire</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2 className="enquire-container__heading-two">Something on your mind, let us know <i class="far fa-smile"></i></h2>
        <EnquireForm />
      </Modal.Body>
    </Modal>
  );
}

export default function EnquireModalShow() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="enquire-container__button" onClick={() => setModalShow(true)}>
        <i class="fas fa-share"></i> Quick question
      </Button>

      <EnquireModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}