import { Modal } from "flowbite-react";
import { useState } from "react";
import { AddButton } from "../buttons/Buttons";
import Form from "../form/Form";

export function ModalForm() {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <AddButton setModalOpen={setOpenModal} />
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <Form />
        </Modal.Body>
      </Modal>
    </>
  );
}
