import { useState } from "react";

const SplitBill = ({ selectedFriend, onSplitBill, setSelectedFriend }) => {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const paidByFriend = bill ? bill - expense : "";
  const [billperson, setBillPerson] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !expense) return;
    onSplitBill(billperson === "user" ? paidByFriend : -expense);

    setSelectedFriend(null);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h1>Split bill with {selectedFriend.name}</h1>
      <br />

      <label>💰 Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>👨‍🔬 Your expense</label>
      <input
        type="number"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />

      <label>👯{selectedFriend.name}'s expense</label>
      <input type="number" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={billperson}
        onChange={(e) => setBillPerson(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Split Bill</button>
    </form>
  );
};

export default SplitBill;
