import axios from "axios";
import { useState, useEffect } from "react";
import ProductTable from "../../components/table/Table";
import { AddButton } from "../../components/buttons/Buttons";

export default function Create() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:8080/api/v1/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data.sales);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [products]);
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
      <AddButton />
      <ProductTable products={products} setProducts={setProducts} />
    </div>
  );
}
