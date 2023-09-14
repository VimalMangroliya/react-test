import { useState } from "react";

function CompFour () {
  const [visible, setVisible] = useState(true);

  const LoginBtn = () => {
    return (
      <>
        <button
          onClick={() => setVisible(!visible)}
          style={{
            padding: " 20px",
            margin: "20px",
            fontSize: "18px",
            fontWeight: 600,
            borderRadius: "10px",
            background: "#333333",
            color: "#ffffff",
          }}
          type="button"
        >
          LogIn user
        </button>
        <button
          onClick={() => setVisible(!visible)}
          style={{
            padding: " 20px",
            margin: "20px",
            fontSize: "18px",
            fontWeight: 600,
            borderRadius: "10px",
            background: "#333333",
            color: "#ffffff",
          }}
          type="button"
        >
          Register user
        </button>
      </>
    );
  };

  const LogOut = () => {
    return (
      <>
        <button
          onClick={() => setVisible(!visible)}
          style={{
            padding: " 20px",
            margin: "20px",
            fontSize: "18px",
            fontWeight: 600,
            borderRadius: "10px",
            background: "#333333",
            color: "#ffffff",
          }}
          type="button"
        >
          Logout user
        </button>
        <button
          onClick={() => setVisible(!visible)}
          style={{
            padding: " 20px",
            margin: "20px",
            fontSize: "18px",
            fontWeight: 600,
            borderRadius: "10px",
            background: "#333333",
            color: "#ffffff",
          }}
          type="button"
        >
          Add iteam
        </button>
      </>
    );
  };
  return (
    <>
      <div style={{ marginTop: " 50px" }}>
        {visible ? <LoginBtn /> : <LogOut />}
      </div>
    </>
  );
}
export default CompFour;
