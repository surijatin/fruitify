import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { addFruitToJar } from "../../store/reducers/FruitJarReducer/fruitJar.actions";
import { FruitType } from "../../types/fruit";

const AddToJarButton: React.FC<{ item: FruitType }> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(addFruitToJar(item));
      }}
      className="px-2 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out shadow-md transform hover:scale-105 mx-auto block"
    >
      Add
    </button>
  );
};

export default AddToJarButton;
