import React, { useEffect, useState } from "react";
import {
  fetchFruits,
  fetchFruitsByGroup,
} from "store/reducers/FruitMenuReducer/fruitMenu.actions";
import TableComponent from "components/TableComponent";
import ListComponent from "components/ListComponent";
import { columns } from "components/TableComponent/columns";
import { useAppDispatch, useAppSelector } from "store/hooks";
import ActionButtonComponent from "components/ActionBarComponent";

const FruitListComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, tData, lData, groupBy } = useAppSelector(
    (state: any) => state.fruitReducer.fruitsData
  );

  const [view, setView] = useState<"table" | "list">("table");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  const handleGroupByChange = (value: string) => {
    setSearchTerm("");
    dispatch(fetchFruitsByGroup(value ?? ""));
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const resetComp = () => {
    setSearchTerm("");
    fetchFruitsByGroup("");
  };

  return (
    <>
      <div className="text-3xl font-extrabold text-center my-6 text-blue-600">
        Fruit Inventory
      </div>
      <ActionButtonComponent
        view={view}
        setView={setView}
        handleGroupByChange={handleGroupByChange}
        handleSearch={handleSearch}
        groupBy={groupBy}
        resetComp={resetComp}
      />
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
    </>
  );
};

export default FruitListComponent;
