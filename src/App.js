import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";

const empList = [
  {
    id: 1,
    name: "SNGL",
    desc: "Gera palata",
    quadr: 10,
    number: 6,
    reg: "Taip",
    patog: "Yra",
  },
  {
    id: 2,
    name: "DBL",
    desc: "Normali palata",
    quadr: 12,
    number: 9,
    reg: "Ne",
    patog: "Nera",
  },
  {
    id: 3,
    name: "SNGL",
    desc: "Palata su patogumais",
    quadr: 9,
    number: 3,
    reg: "Taip",
    patog: "Yra",
  },
  {
    id: 4,
    name: "DBL",
    desc: "Palata be patogumu",
    quadr: 14,
    number: 5,
    reg: "Taip",
    patog: "Nera",
  },
];

function App() {
  const [data, setData] = useState(empList);
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Pavadinimas", field: "name" },
    { title: "Apibudinimas", field: "desc" },
    { title: "Kvadratura", field: "quadr" },
    { title: "Vietu kiekis", field: "number" },
    { title: "Registracija", field: "reg" },
    { title: "Patogumu kiekis", field: "patog" },
  ];

  return (
    <div className="App">
      <h1 align="center">React-table</h1>
      <h4 align="center">Palatu lentele</h4>
      <MaterialTable
        title="Ligonines palatos"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [
                ...data,
                { id: Math.floor(Math.random() * 100), ...newRow },
              ];
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data];
              updatedRows[index] = updatedRow;
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
      />
    </div>
  );
}

export default App;
