import React from "react";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Select, Input } from "antd";

const Option = Select;
const { Search } = Input;

const ActionButtonComponent = ({
  view,
  setView,
  handleGroupByChange,
  handleSearch,
  groupBy,
  resetComp,
}) => (
  <div className="my-4 flex items-center">
    <button
      type="button"
      onClick={() => {
        setView("table");
        resetComp();
      }}
      className={`px-4 py-2 rounded ${
        view === "table" ? "bg-gray-300" : "bg-white"
      } text-black border border-gray-300 mr-2`}
    >
      <TableOutlined />
    </button>
    <button
      type="button"
      onClick={() => {
        setView("list");
        resetComp();
      }}
      className={`px-4 py-2 rounded ${
        view === "list" ? "bg-gray-300" : "bg-white"
      } text-black border border-gray-300 mr-2`}
    >
      <UnorderedListOutlined />
    </button>
    {view === "list" && (
      <>
        <Select
          allowClear
          placeholder="Group by"
          onChange={handleGroupByChange}
          className="w-52 h-10"
        >
          <Option value="">None</Option>
          <Option value="family">Family</Option>
          <Option value="order">Order</Option>
          <Option value="genus">Genus</Option>
        </Select>
        {groupBy === "" && (
          <Search
            placeholder="Search fruits.."
            onSearch={handleSearch}
            size="large"
            className="w-52 ml-2"
            enterButton
            allowClear
          />
        )}
      </>
    )}
  </div>
);

export default ActionButtonComponent;
