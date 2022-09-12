import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <button className="button-24" onClick={() => setModalShow(true)}>
        SHOW MODAL
      </button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Clip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <p>
              <iframe
                width="560"
                height="315"
                src={props.clip}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyVerticallyCenteredModal;
