import axios from "axios";
import { useState, useEffect } from "react";
import ProductTable from "../../components/table/Table";
import Searchbar from "../../components/searchbar/Searchbar";
import { FilterButton } from "../../components/buttons/Buttons";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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

  const handleSearch = (query) => {
    const filter = products.filter((product) =>
      product.item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    setFilteredProducts(filter);
  };
  return (
    <div className="p-5 space-y-10">
      <div>
        <h1 className="font-bold text-3xl text-green-600">
          Halaman Cari Barang
        </h1>
        <p className="text-green-500">
          silahkan melakukan pencarian data barang melalui nama ataupun tanggal
          transaksi di halaman ini
        </p>
      </div>
      <div className="flex w-full">
        <FilterButton />
        <Searchbar onSearch={handleSearch} />
      </div>
      <ProductTable products={filteredProducts} setProducts={setProducts} />
    </div>
  );
}
