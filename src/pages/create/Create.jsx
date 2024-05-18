import ProductTable from "../../components/table/Table";
import { ModalForm } from "../../components/modal/Modal";

export default function Create() {
  return (
    <div className="p-5 space-y-10">
      <div>
        <h1 className="font-bold text-3xl text-green-600">
          Halaman Tambah Barang
        </h1>
        <p className="text-green-500">
          silahkan melakukan tambah data, edit data, dan hapus data barang di
          halaman ini
        </p>
      </div>
      <ModalForm />
      <ProductTable />
    </div>
  );
}
