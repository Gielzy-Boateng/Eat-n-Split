const Button = ({ showAdd, setShowAdd }) => {
  function handleShowAdd() {
    setShowAdd((show) => !showAdd);
  }

  return (
    <button className="button" onClick={handleShowAdd}>
      {showAdd ? "close" : "Add friend"}
    </button>
  );
};

export default Button;
