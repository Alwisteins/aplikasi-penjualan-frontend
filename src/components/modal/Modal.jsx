import { Modal } from "flowbite-react";
import Form from "../form/Form";

export function ModalForm({ openModal, onCloseModal, form, id }) {

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <Form form={form} id={id} />
        </Modal.Body>
      </Modal>
    </>
  );
}
