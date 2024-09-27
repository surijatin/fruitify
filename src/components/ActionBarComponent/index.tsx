import React from "react";
import { Select, Input } from "antd";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";

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
        setView("list");
        resetComp();
      }}
      className={`px-4 py-2 rounded ${
        view === "list" ? "bg-gray-300" : "bg-white"
      } text-black border border-gray-300 mr-2`}
    >
      <UnorderedListOutlined />
    </button>
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
            placeholder="Search a fruit.."
            onSearch={handleSearch}
            size="large"
            className="w-52 ml-auto"
            enterButton
            allowClear
          />
        )}
      </>
    )}
  </div>
);

export default ActionButtonComponent;
