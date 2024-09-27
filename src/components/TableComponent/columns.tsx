import React from "react";
import AddToJarButton from "../ButtonComponent";

export const columns = [
  {
    title: <span className="text-sm md:text-lg">Name</span>,
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <span className="text-sm md:text-lg">{text}</span>,
    fixed: "left",
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
          className="w-full mb-2 p-2 rounded border border-gray-300 text-sm md:text-lg"
        />
        <div className="flex justify-between w-full">
          <button
            type="button"
            onClick={confirm}
            className="flex-1 mr-2 p-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 text-sm md:text-lg"
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
            className="flex-1 p-2 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 text-sm md:text-lg"
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
    title: <span className="text-sm md:text-lg">Family</span>,
    dataIndex: "family",
    key: "family",
    render: (text) => <span className="text-sm md:text-lg">{text}</span>,
  },
  {
    title: <span className="text-sm md:text-lg">Order</span>,
    dataIndex: "order",
    key: "order",
    render: (text) => <span className="text-sm md:text-lg">{text}</span>,
  },
  {
    title: <span className="text-sm md:text-lg">Genus</span>,
    dataIndex: "genus",
    key: "genus",
    render: (text) => <span className="text-sm md:text-lg">{text}</span>,
  },
  {
    title: <span className="text-sm md:text-lg">Calories</span>,
    dataIndex: "nutritions",
    key: "calories",
    render: (nutritions) => (
      <span className="text-sm md:text-lg">{nutritions.calories} calories</span>
    ),
    sorter: (a, b) => a.nutritions.calories - b.nutritions.calories,
  },
  {
    title: <span className="text-sm md:text-lg">Add to Jar</span>,
    key: "addToCart",
    render: (text, record) => (
      <div className="text-sm md:text-lg">
        <AddToJarButton item={record} />
      </div>
    ),
  },
];
