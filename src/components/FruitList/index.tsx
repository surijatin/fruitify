import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchFruits,
  fetchFruitsByGroup,
} from "../../store/reducers/FruitsReducer/actions.tsx";
import PropTypes from "prop-types";
import TableComponent from "../TableComponent/index.tsx";
import ListComponent from "../ListComponent/index.tsx";
import { TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Select, Input } from "antd";
import { columns } from "../TableComponent/columns.tsx";

const { Option } = Select;
const { Search } = Input;

interface FruitListProps {
  fetchFruits: () => void;
  isLoading: boolean;
  tData: any;
  lData: any;
  error: any;
}

const FruitList: React.FC = ({
  fetchFruits,
  isLoading,
  tData,
  lData,
  error,
}: FruitListProps) => {
  const [view, setView] = useState<"table" | "list">("table");
  const [groupBy, setGroupBy] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetchFruits();
  }, [fetchFruits]);

  const handleGroupByChange = (value: string) => {
    console.log("🚀 ~ handleGroupByChange ~ value:", value);
    fetchFruitsByGroup(value);
    setGroupBy(value);
  };

  const handleSearch = (value: string) => {
    console.log("Search value:", value);
    setSearchTerm(value);
  };

  return (
    <div>
      <div className="text-2xl font-bold text-center my-4">Fruit Menu</div>
      <div className="my-4 flex items-center">
        <button
          type="button"
          onClick={() => {
            setView("table");
            setGroupBy(null);
            setSearchTerm("");
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
            setGroupBy(null);
            setSearchTerm("");
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
              <Option value="family">Family</Option>
              <Option value="genus">Genus</Option>
              <Option value="order">Order</Option>
            </Select>
            <Search
              placeholder="Search fruits.."
              onSearch={handleSearch}
              size="large"
              className="w-52 ml-2"
              enterButton
              allowClear
            />
          </>
        )}
      </div>

      {view === "table" ? (
        <TableComponent columns={columns} data={tData} loading={isLoading} />
      ) : (
        <ListComponent
          data={lData}
          groupBy={groupBy}
          searchTerm={searchTerm}
          loading={isLoading}
        />
      )}
    </div>
  );
};

FruitList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tData: PropTypes.array.isRequired,
  lData: PropTypes.array.isRequired,
};

const mapStateToProps = (state: any) => ({
  isLoading: state.fruitReducer.fruitsData.isLoading,
  tData: state.fruitReducer.fruitsData.tData,
  lData: state.fruitReducer.fruitsData.lData,
  error: state.fruitReducer.fruitsData.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchFruits: () => dispatch(fetchFruits()),
  fetchFruitsByGroup: (groupBy: string) =>
    dispatch(fetchFruitsByGroup(groupBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FruitList);
