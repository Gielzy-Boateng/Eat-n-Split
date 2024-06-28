import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import SplitBill from "./SplitBill";
import "./index.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [addFriend, setAddFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSplitBill(value) {
    setAddFriend((addFriend) =>
      addFriend.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  function handleSelectedFriend(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((select) => (select?.id === friend.id ? null : friend));
    setShowAdd(false);
  }

  function handleAddFriend(friend) {
    setAddFriend((newFriend) => [...newFriend, friend]);
    setShowAdd(false);
  }

  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={initialFriends}
          addFriend={addFriend}
          onSelection={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAdd && (
          <FormAddFriend newFriend={addFriend} onAddFriend={handleAddFriend} />
        )}
        <Button showAdd={showAdd} setShowAdd={setShowAdd} />
      </div>
      {selectedFriend && (
        <SplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          setSelectedFriend={setSelectedFriend}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
