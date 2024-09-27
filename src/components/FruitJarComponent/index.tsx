import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { Statistic, List } from "antd";
import { DeleteOutlined, FireOutlined } from "@ant-design/icons";
import { FruitJarItem } from "../../types/fruit";
import {
  addFruitToJar,
  removeFruitFromJar,
  clearFruitJar,
} from "../../store/reducers/FruitJarReducer/fruitJar.actions";

const FruitJarComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, totalCalories } = useAppSelector(
    (state) => state.fruitJarReducer.fruitJar
  );

  return (
    <>
      <div className="text-3xl font-extrabold text-center my-6 text-blue-600">
        Your Fruit Jar
      </div>
      <div className="flex justify-end">
        <Statistic
          title="Total Calories"
          value={totalCalories}
          prefix={<FireOutlined />}
          className="border p-4 rounded-lg"
          valueStyle={{
            color:
              totalCalories === 0
                ? "#000"
                : totalCalories < 300
                ? "#22c55e"
                : totalCalories < 600
                ? "#eab308"
                : "#b91c1c",
          }}
        />
      </div>
      <div className="my-4">
        <List
          header={
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Fruit Jar Details ({data.length} items)</span>
              {data.length > 0 && (
                <button
                  onClick={() => dispatch(clearFruitJar())}
                  className="px-2 border border-red-500 text-red-500 rounded shadow-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out"
                >
                  <DeleteOutlined />
                </button>
              )}
            </div>
          }
          bordered
          dataSource={data}
          locale={{
            emptyText: (
              <div className="flex flex-col items-center">
                <img
                  src="./empty-jar.png"
                  alt="Empty Jar"
                  className="w-16 h-16 mb-2"
                />
                <span className="text-lg text-gray-600">
                  Your Fruit Jar is empty :(
                </span>
                <span className="text-md text-gray-500">
                  Add items from the inventory.
                </span>
              </div>
            ),
          }}
          renderItem={(item: FruitJarItem) => (
            <List.Item>
              <div className="flex justify-between w-full">
                <span className="text-lg">{item.name}</span>
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch(removeFruitFromJar(item))}
                    className="px-2 py-1 bg-red-500 text-white rounded shadow-md hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    -
                  </button>
                  <span className="mx-1 w-24 text-center text-lg">
                    Qty: {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(addFruitToJar(item))}
                    className="px-2 py-1 bg-green-500 text-white rounded shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    +
                  </button>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default FruitJarComponent;
