import { useState } from "react";
import axios from "axios";
import { ModalForm, ModalFilter } from "../modal/Modal";

export function FilterButton() {
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        onClick={() => setOpenModal(true)}
      >
        Filter
      </button>
      <ModalFilter openModal={openModal} onCloseModal={onCloseModal} />
    </>
  );
}

export function AddButton() {
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <button
        className="bg-green-400 text-white py-2 px-3 rounded-md mr-2"
        onClick={() => setOpenModal(true)}
      >
        Tambah
      </button>
      <ModalForm
        openModal={openModal}
        onCloseModal={onCloseModal}
        form="create"
      />
    </>
  );
}

export function EditButton({ id }) {
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const handleEdit = async () => {
    setOpenModal(true);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
        onClick={handleEdit}
      >
        Edit
      </button>
      <ModalForm
        openModal={openModal}
        onCloseModal={onCloseModal}
        form="edit"
        id={id}
      />
    </>
  );
}

export function DeleteButton({ id, onDelete }) {
  const url = `http://localhost:8080/api/v1/${id}`;

  const handleDelete = async () => {
    try {
      await axios.delete(url);
      console.log(`Item with ID ${id} has been deleted`);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return (
    <button
      className="bg-red-500 text-white px-2 py-1 rounded"
      onClick={handleDelete}
    >
      Hapus
    </button>
  );
}
