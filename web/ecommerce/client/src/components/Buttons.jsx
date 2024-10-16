/* eslint-disable react/prop-types */
function Buttons({ children, onClick }) {
  const buttonStyle = {
    padding: " 0.2rem 1rem",
    backgroundColor: "#0B5ED7",
    borderRadius: "0.5rem",
  };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
}

export default Buttons;
