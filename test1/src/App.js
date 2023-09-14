
function App() {
  const data = [
    {
      firstName: "first_name_1",
      age: "24",
      lastName: "last_name_1",
      id: 1,
    },
    {
      firstName: "first_name_2",
      age: "22",
      lastName: "last_name_2",
      id: 2,
    },
    {
      firstName: "first_name_3",
      age: "43",
      lastName: "last_name_3",
      id: 3,
    },
    {
      firstName: "first_name_4",
      age: "34",
      lastName: "last_name_4",
      id: 4,
    },
  ];

  return (
    <div style={{ background: "gray", padding: "20px" }}>
      <h1>Card Component</h1>
      <div
        style={{
          margin: " 20px",
          padding: "20px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        {data &&
          data.map((items, index) => (
            <div
              key={index}
              style={{ backgroundColor: "#FFFFFF", padding: "20px" }}
            >
              <p style={{ fontSize: "30px" }}>card {items.id} </p>
              <p style={{ fontWeight: 600, fontSize: "24px" }}>
                {" "}
                age of user : <br></br>
                {items.firstName} &nbsp; {items.lastName}{" "}
              </p>
              <p style={{ fontSize: "20px" }}> age of user: {items.age} </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
