import { useState } from "react";

const dataWorkerList = [
  {
    firstName: "John",
    lastName: "Smith",
    department: "IT",
    salary: { amount: 3000, currency: "USD" },
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    department: "IT",
    salary: { amount: 3000.5, currency: "USD" },
  },
  {
    firstName: "Bob",
    lastName: "Colman",
    department: "Sales",
    salary: { amount: 9000, currency: "USD" },
  },
  {
    firstName: "Barbara",
    lastName: "O'Connor",
    department: "Sales",
    salary: { amount: 4000, currency: "USD" },
  },
  {
    firstName: "Adam",
    lastName: "Murphy",
    department: "Administration",
    salary: { amount: 2000, currency: "USD" },
  },
];
const WorkerList = () => {
  const [data, setData] = useState(dataWorkerList);
  const salarySum = data.reduce((acc, i) => acc + i.salary.amount, 0);

  return (
    <div>
      <h2>Workers</h2>
      <table border={1}>
        <thead>
          {data.map((worker, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{worker.firstName}</td>
              <td>{worker.lastName}</td>
              <td>{worker.department}</td>
              <td>
                {worker.salary.amount} {worker.salary.currency}
              </td>
            </tr>
          ))}
        </thead>
        <tfoot>
          <tr>
            <td></td>
            <td>Summary</td>
            <td>{salarySum} USD</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default WorkerList;
