import { Modal } from "flowbite-react";
import Form from "../form/Form";

export function ModalForm({ openModal, onCloseModal }) {

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <Form />
        </Modal.Body>
      </Modal>
    </>
  );
}
