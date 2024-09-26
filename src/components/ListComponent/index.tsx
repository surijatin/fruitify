import React, { useEffect, useState } from "react";
import { List } from "antd";
import { FruitType } from "../../types/fruit";

interface ListComponentProps {
  data: FruitType[];
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
  const [filteredData, setFilteredData] = useState<FruitType[]>(data);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  return (
    <div>
      <List
        loading={loading}
        size="large"
        bordered
        pagination={{ align: "end" }}
        dataSource={filteredData}
        renderItem={(item: FruitType) => (
          <List.Item
            actions={[
              <button
                type="button"
                onClick={() => {
                  // Add to cart logic here
                  console.log(`Added ${item.name} to cart`);
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
              </button>,
            ]}
          >
            <List.Item.Meta
              title={<span className="font-bold">{item.name}</span>}
              description={
                <>
                  Genus: {item.genus}, Family: {item.family}, Order:{" "}
                  {item.order},{" "}
                  <span className="font-bold text-gray-700">
                    Calories: {item.nutritions.calories}
                  </span>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListComponent;
