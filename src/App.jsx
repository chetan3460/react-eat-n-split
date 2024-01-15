import { useState } from "react";

import "./index.css";

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

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList></FriendList>
        <FormAddFriend></FormAddFriend>
        <Button>Add friend</Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  );
}

function FriendList() {
  const friend = initialFriends;
  return (
    <ul>
      {friend.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
          💶
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-firend">
      <label>Friend Name</label>
      <input type="text"></input>

      <label>Image URL</label>
      <input type="text"></input>

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X </h2>

      <label>💵Bill Value</label>
      <input type="text"></input>

      <label>🧍 Your Expense</label>
      <input type="text"></input>

      <label>🧍 X's Expanse</label>
      <input type="text" disabled></input>
      <label>Whos is paying the bill</label>

      <select>
        <option value="user">you</option>
        <option value="user">X</option>
      </select>

      <Button>SPlit bill</Button>
    </form>
  );
}