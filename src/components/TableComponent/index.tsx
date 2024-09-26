import React from "react";
import { Table } from "antd";
import { Descriptions } from "antd";

interface TableComponentProps {
  data: any[];
  columns: any[];
  loading: boolean;
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  columns,
  loading,
}) => {
  return (
    <Table
      bordered
      dataSource={data}
      columns={columns}
      loading={loading}
      rowKey={(record) => record.id}
      expandable={{
        expandedRowRender: (record) => (
          <Descriptions title="Nutrition Details:" bordered column={2}>
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
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
    />
  );
};

export default TableComponent;
