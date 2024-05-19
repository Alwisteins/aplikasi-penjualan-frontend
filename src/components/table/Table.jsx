import { EditButton, DeleteButton } from "../buttons/Buttons";

const tableHead = [
  "No",
  "Nama Barang",
  "Stok",
  "Jumlah Terjual",
  "Tanggal Transaksi",
  "Jenis Barang",
  "Action",
];

const ProductTable = ({ products, setProducts }) => {
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="overflow-x-auto flex">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th className="px-4 py-2 border-b" key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center">{index + 1}</td>
                <td className="px-4 py-2 border-b">{item.item}</td>
                <td className="px-4 py-2 border-b text-center">{item.stock}</td>
                <td className="px-4 py-2 border-b text-center">{item.sold}</td>
                <td className="px-4 py-2 border-b text-center">
                  {new Date(item.transaction_date).toLocaleDateString("id-ID")}
                </td>
                <td className="px-4 py-2 border-b">{item.type}</td>
                <td className="px-4 py-2 border-b">
                  <EditButton id={item.id} />
                  <DeleteButton id={item.id} onDelete={handleDelete} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2 border-b text-center" colSpan={7}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
