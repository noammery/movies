import "./header.css";
function Header() {
  return (
    <div className="header">
      <h1>
        Your favorite movie !{" "}
        <img
          className="popcorn"
          src="https://img.freepik.com/premium-vector/popcorn-icon-illustration-isolated_385450-88.jpg"
          alt=""
        />
      </h1>
    </div>
  );
}

export default Header;
