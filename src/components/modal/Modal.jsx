import { useState, useEffect } from "react";
import { Modal, Select } from "flowbite-react";
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

export function ModalFilter({ openModal, onCloseModal, onFilter }) {
  const [buttonFilter, setButtonFilter] = useState(false);
  const [selectFilter, setSelectFilter] = useState("");

  useEffect(() => {
    onFilter(buttonFilter, selectFilter);
  }, [buttonFilter, selectFilter]);

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
              <button
                className={`${
                  buttonFilter
                    ? "bg-green-200 border-green-400"
                    : "bg-slate-100 border-slate-300"
                } border py-1 px-4 rounded-xl`}
                onClick={() => setButtonFilter(!buttonFilter)}
              >
                a-z
              </button>
              <Select
                value={selectFilter}
                onChange={(e) => setSelectFilter(e.target.value)}
                required
              >
                <option value="terbaru">Terbaru</option>
                <option value="terlama">Terlama</option>
              </Select>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
