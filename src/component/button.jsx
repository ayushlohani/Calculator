import "./Button.css";
function ButtonCalci({ value, handle }) {
  if (value === "=") {
    return (
      <button className="bute" id={value} onClick={handle}>
        {value}
      </button>
    );
  } else {
    return (
      <button className=" but" id={value} onClick={handle}>
        {value}
      </button>
    );
  }
}
export default ButtonCalci;
