import React from "react";

interface ColumnDefs<T> {
  title: string;
  field?: string;
  render?: (data: T) => React.ReactNode;
}

export type GenericTableProps<T> = {
  columnDefs: ColumnDefs<T>[];
  data: T[];
};

const Table: React.FC<GenericTableProps<any>> = ({ columnDefs, data }) => {
  return (
    <table className="min-w-full divide-y overflow-hidden rounded-lg divide-gray-800 shadow-lg">
      <thead className="bg-green-200">
        <tr>
          {columnDefs.map((column, index) => (
            <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((rowData, index) => (
          <tr key={index} className="cursor-pointer hover:bg-gray-100">
            {columnDefs.map((column, index) => (
              <td key={index} className="px-6 py-4 whitespace-nowrap">
                {column.field ? rowData[column.field!] : column.render ? column.render(rowData) : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;