import React from "react";
import { Table } from "antd";
import { Descriptions } from "antd";
import { FruitType } from "types/fruit";
import type { TableColumnsType } from "antd";

interface TableComponentProps {
  data: FruitType[];
  columns: TableColumnsType<FruitType>;
  loading: boolean;
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  columns,
  loading,
}) => {
  return (
    <Table
      size={window.innerWidth < 768 ? "small" : "middle"}
      bordered
      dataSource={data}
      columns={columns}
      loading={loading}
      rowKey={(record) => record.id}
      sticky={true}
      scroll={{ x: 768 }}
      expandable={{
        expandedRowRender: (record) => (
          <div className="bg-white-100 p-4">
            <Descriptions
              title="Nutrition Details:"
              bordered
              column={window.innerWidth < 768 ? 1 : 2}
              size={window.innerWidth < 768 ? "small" : "default"}
            >
              <Descriptions.Item label="Fat">
                {record.nutritions.fat}g
              </Descriptions.Item>
              <Descriptions.Item label="Sugar">
                {record.nutritions.sugar}g
              </Descriptions.Item>
              <Descriptions.Item label="Carbohydrates">
                {record.nutritions.carbohydrates}g
              </Descriptions.Item>
              <Descriptions.Item label="Protein">
                {record.nutritions.protein}g
              </Descriptions.Item>
              <Descriptions.Item label="Calories">
                {record.nutritions.calories} calories
              </Descriptions.Item>
            </Descriptions>
          </div>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
    />
  );
};

export default TableComponent;
