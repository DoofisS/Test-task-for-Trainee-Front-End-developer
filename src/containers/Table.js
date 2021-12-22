import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Table, Spin } from "antd";
import NameFilter from "../components/NameFilter";
import { useState, useEffect } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    },
  },
  {
    title: "Birth Year",
    dataIndex: "birth_year",
    sorter: {
      compare: (a, b) => parseInt(a.birth_year) - parseInt(b.birth_year),
    },
  },
  {
    title: "Height",
    dataIndex: "height",
    sorter: {
      compare: (a, b) => a.height - b.height,
    },
  },
  {
    title: "Mass",
    dataIndex: "mass",
    sorter: {
      compare: (a, b) => a.mass - b.mass,
    },
  },
];

const FullTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let newData = fetch("https://swapi.dev/api/people/");
    newData
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const responseData = data.results.map((currentValue, index) => {
          return { ...currentValue, key: index };
        });
        setFilteredData(responseData);
        setData(responseData);
      });
  }, []);

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      {filteredData.length === 0 && (
        <Spin style={{ textAlign: "center", marginLeft: "50%" }} />
      )}
      {filteredData.length > 0 && (
        <>
          <NameFilter
            offset={4}
            filteredData={filteredData}
            setData={setData}
          />
          <Table
            style={{ marginTop: "25px" }}
            columns={columns}
            dataSource={data}
            onChange={onChange}
            pagination={false}
          ></Table>
        </>
      )}
    </>
  );
};
export default FullTable;
