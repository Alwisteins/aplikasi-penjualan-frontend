import { useState } from "react";
import axios from "axios";
import { ModalForm } from "../modal/Modal";

export function AddButton() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <button
        className="bg-green-400 text-white py-2 px-3 rounded-md mr-2"
        onClick={() => setOpenModal(true)}
      >
        Tambah
      </button>
      <ModalForm openModal={openModal} onCloseModal={onCloseModal} />
    </>
  );
}

export function EditButton({ id, data }) {
  const url = `http://localhost:8080/api/v1/${id}`;

  const handleEdit = async () => {
    try {
      await axios.put(url, data);
      console.log(`Item with ID ${id} has been updated`);
    } catch (error) {
      console.error("Error updating data: ", error);
    }
  };

  return (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
      onClick={handleEdit}
    >
      Edit
    </button>
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
