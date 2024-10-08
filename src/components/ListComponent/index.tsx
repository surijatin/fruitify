import React, { useEffect, useState } from "react";
import { List, Collapse } from "antd";
import { FruitType } from "types/fruit";
import AddToJarButton from "components/ButtonComponent";
import { useAppDispatch } from "store/hooks";
import { addFruitToJar } from "store/reducers/FruitJarReducer/fruitJar.actions";

interface ListComponentProps {
  data: Record<string, FruitType[]> | FruitType[];
  loading: boolean;
  groupBy: string | null;
  searchTerm: string;
}

const ListComponent: React.FC<ListComponentProps> = ({
  data,
  loading,
  groupBy,
  searchTerm,
}) => {
  const [filteredData, setFilteredData] = useState<FruitType[]>(
    Array.isArray(data) ? data : []
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Array.isArray(data)) {
      setFilteredData(
        data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, data]);

  return (
    <div>
      {groupBy === "" ? (
        <List
          loading={loading}
          size="large"
          bordered
          pagination={{ align: "end" }}
          dataSource={filteredData}
          renderItem={(item: FruitType) => (
            <List.Item actions={[<AddToJarButton item={item} />]}>
              <List.Item.Meta
                title={
                  <span className="font-bold text-md md:text-lg">
                    {item.name}{" "}
                    <span className="text-gray-700">
                      ({item.nutritions.calories} Calories)
                    </span>
                  </span>
                }
                description={
                  <span className="hidden md:inline">
                    Genus: {item.genus}, Family: {item.family}, Order:{" "}
                    {item.order}{" "}
                  </span>
                }
              />
            </List.Item>
          )}
        />
      ) : (
        <Collapse accordion size={window.innerWidth < 768 ? "medium" : "large"}>
          {Object.entries(data).map(([key, group]) => (
            <Collapse.Panel
              header={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{`${key} (${(group as FruitType[]).length})`}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      (group as FruitType[]).forEach((item: FruitType) =>
                        dispatch(addFruitToJar(item))
                      );
                    }}
                    className="px-4 py-1 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition duration-300 ease-in-out shadow-md transform hover:scale-105"
                  >
                    Add all to Jar
                  </button>
                </div>
              }
              key={key}
            >
              <List
                dataSource={group as FruitType[]}
                renderItem={(item: FruitType) => (
                  <List.Item actions={[<AddToJarButton item={item} />]}>
                    <List.Item.Meta
                      title={
                        <span className="font-bold text-md md:text-lg">
                          {item.name}{" "}
                          <span className="md:hidden font-normal">
                            ({item.nutritions.calories} Calories)
                          </span>
                        </span>
                      }
                      description={
                        <>
                          <span className="hidden md:inline">
                            Genus: {item.genus}, Family: {item.family}, Order:{" "}
                            {item.order}{" "}
                            <span className="md:font-bold text-gray-700">
                              , Calories: {item.nutritions.calories}
                            </span>
                          </span>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </div>
  );
};

export default ListComponent;
