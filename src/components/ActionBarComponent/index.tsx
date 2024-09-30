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
  limitCal,
  handleLimit,
}) => (
  <div className="my-4 flex items-center">
    <button
      type="button"
      onClick={() => {
        setView("list");
        resetComp();
      }}
      className={`px-2 py-1 md:px-4 md:py-1.5 rounded ${
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
      className={`px-2 py-1 md:px-4 md:py-1.5 rounded ${
        view === "table" ? "bg-gray-300" : "bg-white"
      } text-black border border-gray-300 mr-2`}
    >
      <TableOutlined />
    </button>
    <Input
      type="number"
      placeholder="Set the calorie limit"
      className="w-40 h-8 md:w-52 md:h-10 mr-2 md:mr-0"
      size="large"
      onChange={handleLimit}
      value={limitCal}
    />
    {view === "list" && (
      <>
        <Select
          allowClear
          placeholder="Group by"
          onChange={handleGroupByChange}
          className="w-40 h-8 md:w-52 md:h-10 mr-2 md:mr-0"
          size="large"
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
            className="w-40 md:w-52 ml-auto"
            enterButton
            allowClear
          />
        )}
      </>
    )}
  </div>
);

export default ActionButtonComponent;
