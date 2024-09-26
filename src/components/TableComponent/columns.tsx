import React from "react";
import AddToJarButton from "../ButtonComponent/index.tsx";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div className="p-2 flex flex-col items-center">
        <input
          placeholder="Search Name"
          value={selectedKeys[0]}
          onChange={(e) => {
            setSelectedKeys(e.target.value ? [e.target.value] : []);
            if (e.key === "Enter") {
              confirm();
            }
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              confirm();
            }
          }}
          className="w-full mb-2 p-2 rounded border border-gray-300"
        />
        <div className="flex justify-between w-full">
          <button
            type="button"
            onClick={confirm}
            className="flex-1 mr-2 p-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => {
              clearFilters();
              setSelectedKeys([]);
              confirm();
            }}
            className="flex-1 p-2 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Reset
          </button>
        </div>
      </div>
    ),
    onFilter: (value, record) =>
      record.name.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "Family",
    dataIndex: "family",
    key: "family",
  },
  {
    title: "Order",
    dataIndex: "order",
    key: "order",
  },
  {
    title: "Genus",
    dataIndex: "genus",
    key: "genus",
  },
  {
    title: "Calories",
    dataIndex: "nutritions",
    key: "calories",
    render: (nutritions) => <span>{nutritions.calories} calories</span>,
    sorter: (a, b) => a.nutritions.calories - b.nutritions.calories,
  },
  {
    title: "Add to Jar",
    key: "addToCart",
    render: (text, record) => <AddToJarButton item={record} />,
  },
];
