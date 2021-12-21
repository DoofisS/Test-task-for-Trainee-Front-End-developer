import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Input } from "antd";
import { Row, Col } from "antd";

const NameFilter = (props) => {
  const onSearch = (value) => {
    if (!value) {
      props.setData(props.filteredData);
    }

    let searchedData = props.filteredData.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    props.setData(searchedData);
  };

  return (
    <Row>
      <Col span={6}>
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Col>
    </Row>
  );
};

export default NameFilter;
