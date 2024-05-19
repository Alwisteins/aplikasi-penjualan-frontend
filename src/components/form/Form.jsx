import { useState, useEffect } from "react";
import { Button, Label, Datepicker } from "flowbite-react";
import InputField from "./Input";
import axios from "axios";

const validateForm = ({ name, stock, sold, type }) => {
  const isNameValid = name.trim().length > 0;
  const isTypeValid = type.trim().length > 0;
  const isStokValid = !isNaN(stock) && stock.trim().length > 0;
  const isSoldValid = !isNaN(sold) && sold.trim().length > 0;

  return isNameValid && isTypeValid && isStokValid && isSoldValid;
};

export default function Form({ form, id }) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [sold, setSold] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState(null);
  const [isValid, setIsValid] = useState(false);

  //validating form input
  useEffect(() => {
    setIsValid(validateForm({ name, stock, sold, type }));
  }, [name, stock, sold, type]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validating form data
    isValid == false && alert("Please fill out the form correctly.");

    // post valid data into api
    const isIdExist = id ? id : "";
    const url = `http://localhost:8080/api/v1/${isIdExist}`;
    console.log(url);
    isIdExist
      ? await axios.put(url, { item: name, stock, sold, date, type })
      : await axios.post(url, { item: name, stock, sold, date, type });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl text-center font-semibold text-green-500 dark:text-white">
        {form == "create" ? "Tambah data penjualan" : "Edit data penjualan"}
      </h3>
      <div>
        <InputField
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="e.g. Handphone"
          label="Nama Barang"
        />
      </div>
      <div className="flex space-x-5">
        <InputField
          id="stock"
          value={stock}
          onChange={(event) => setStock(event.target.value)}
          placeholder="e.g. 32"
          label="Stok Barang"
        />
        <InputField
          id="sold"
          value={sold}
          onChange={(event) => setSold(event.target.value)}
          placeholder="e.g. 19"
          label="Barang Terjual"
        />
      </div>
      <div className="space-y-5">
        <div>
          <InputField
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            placeholder="e.g. Elektronik"
            label="Jenis Barang"
          />
        </div>
        <div>
          <Label htmlFor="date" value="Tanggal Transaksi" />
          <Datepicker id="date" onSelectedDateChanged={setDate} />
        </div>
      </div>
      <div className="w-full">
        <Button
          type="submit"
          className="m-auto bg-green-400 hover:bg-green-200"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
