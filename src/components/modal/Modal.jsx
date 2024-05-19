import { Modal, Select } from "flowbite-react";
import { OptionButton } from "../buttons/Buttons";
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

export function ModalFilter({ openModal, onCloseModal }) {
  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-5">
            <h1 className="text-center font-semibold text-green-500">
              Filter result
            </h1>
            <div className="w-full flex justify-evenly">
              <OptionButton name="a-z" />
              <Select required>
                <option>Terbaru</option>
                <option>Terlama</option>
              </Select>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
