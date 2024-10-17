import { Button } from "react-bootstrap";

export default function Header() {
  const headerStyle = {
    marginBottom: "100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    fontFamily: "Chewy",
    fontWeight: "400",
    fontStyle: "normal",
  };

  const buttonsDivStyle = {
    display: "flex",
    gap: "20px",
  };
  return (
    <header style={headerStyle}>
      {" "}
      <h1>
        {" "}
        Animals Info for{" "}
        <span
          style={{ color: "#ff9d00", fontSize: "5rem", marginLeft: "1.4rem" }}
        >
          {" "}
          Kids{" "}
        </span>{" "}
      </h1>{" "}
      <div style={buttonsDivStyle}>
        <Button variant="secondary"> Register </Button>
        <Button variant="light"> Login </Button>
      </div>
    </header>
  );
}
