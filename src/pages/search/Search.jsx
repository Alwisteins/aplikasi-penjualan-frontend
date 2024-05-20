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
        setFilteredProducts(response.data.sales);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filter = products.filter((product) =>
      product.item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    query.trim() == ""
      ? setFilteredProducts(products)
      : setFilteredProducts(filter);
  };

  const handleFilter = (sortByName, sortByDate) => {
    let sortedProducts = [...filteredProducts];
    let filterOption = sortByName ? '' : sortByDate;

    // Sort by name if sortByName is true
    sortedProducts = sortByName
      ? sortedProducts.sort((a, b) => {
          const nameA = a.item.toLocaleLowerCase();
          const nameB = b.item.toLocaleLowerCase();
          return nameA.localeCompare(nameB);
        })
      : products;

    // Sort by date if sortByDate is not an empty string
    sortedProducts =
      filterOption.trim() !== ""
        ? [...filteredProducts].sort((a, b) => {
            const dateA = new Date(a.transaction_date);
            const dateB = new Date(b.transaction_date);
            return sortByDate === "terbaru" ? dateB - dateA : dateA - dateB;
          })
        : sortedProducts;

    setFilteredProducts(sortedProducts);
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
        <FilterButton onFilter={handleFilter} />
        <Searchbar onSearch={handleSearch} />
      </div>
      <ProductTable
        products={filteredProducts}
        setProducts={setFilteredProducts}
      />
    </div>
  );
}
