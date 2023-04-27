import { useState } from "react";
import UserList from "./UserList"

function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]); //[{name: "Siddhant", email : "sid@gmail.com"},{name: "Siddhant", email : "sid@gmail.com"}]
  var handleClick = function () {
    var obj = {name: name, email : email}
    setUsers([...users, obj]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <button onClick={handleClick}>Add to Table</button>
	   <UserList data={users} xyz={"kjak"}/>
    </div>
  );
}

export default User;
