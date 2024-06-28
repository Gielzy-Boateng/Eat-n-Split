import Friend from "./Friend";

const FriendsList = ({ addFriend, onSelection, selectedFriend }) => {
  return (
    <ul>
      {addFriend.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          addFriend={addFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
