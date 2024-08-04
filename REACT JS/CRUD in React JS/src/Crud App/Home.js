import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";

function Home() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleInput = (value) => {
    setInput(value);
  };
  function handleDelete(id) {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios.delete("http://localhost:8000/users/" + id).then((res) => {
        alert("Record Deleted");
        axios
          .get("http://localhost:8000/users")
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
        navigate("/");
      });
    }
  }
  const headers = [
    {
      label: "name",
      key: "name",
    },
    {
      label: "email",
      key: "email",
    },
    {
      label: "department",
      key: "department",
    },
    {
      label: "number",
      key: "number",
    },
  ];
  const csvLink = {
    filename: "data.csv",
    headers: headers,
    data: data,
  };
  return (
    <div className="container mt-5">
      <div className="header d-flex">
        <h2 className="title">Employee Details</h2>
        <div className="input-wrapper">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type to search..."
              aria-label="Type to search..."
              aria-describedby="basic-addon2"
              value={input}
              onChange={(e) => handleInput(e.target.value)}
            />
            <span className="input-group-text" id="basic-addon2">
              <BsSearch className="fs-6" />
            </span>
          </div>
        </div>
        <CSVLink {...csvLink} to="/" className="export-button btn btn-success">
          Export +
        </CSVLink>
        <Link to="/create" className="create-button btn btn-success">
          Create +
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((d) => {
              return input.toLowerCase() === ""
                ? d
                : d.name.toLowerCase().includes(input) || d.name.includes(input);
            })
            .map((d, i) => (
              <tr key={i}>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.department}</td>
                <td>{d.number}</td>
                <td>
                  <Link
                    className="text-decoration-none btn btn-sm btn-primary mx-1"
                    to={`/read/${d.id}`}
                  >
                    Read
                  </Link>
                  <Link
                    className="text-decoration-none btn btn-sm btn-success mx-1"
                    to={`/update/${d.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="text-decoration-none btn btn-sm btn-danger mx-1"
                    onClick={(e) => handleDelete(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
