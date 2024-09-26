import React from "react";

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
      <div
        style={{
          padding: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
          style={{
            width: "100%",
            marginBottom: 8,
            padding: 8,
            borderRadius: 4,
            border: "1px solid #d9d9d9",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <button
            type="button"
            onClick={confirm}
            style={{
              flex: 1,
              marginRight: 8,
              padding: 8,
              borderRadius: 4,
              backgroundColor: "#1890ff",
              color: "#fff",
              border: "none",
            }}
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
            style={{
              flex: 1,
              padding: 8,
              borderRadius: 4,
              backgroundColor: "#f5222d",
              color: "#fff",
              border: "none",
            }}
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
    render: (text, record) => (
      <button
        type="button"
        onClick={() => {
          // Add to cart logic here
          console.log(`Added ${record.name} to cart`);
        }}
        style={{
          padding: "4px 8px",
          borderRadius: "4px",
          backgroundColor: "#d9d9d9",
          color: "#000",
          border: "1px solid #ccc",
        }}
      >
        Add to Jar
      </button>
    ),
  },
];
