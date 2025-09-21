const UserList = () => {
  const user = [
    { id: 1, name: "Krishna", age: 30 },
    { id: 2, name: "Jyothi", age: 26 },
    { id: 3, name: "Navya", age: 3 },
  ];
  return (
    <div>
      {user.map((u) => (
        <ul key={u.id}>
          <li>{u.id}</li>
          <li>{u.name}</li>
          <li>{u.age}</li>
        </ul>
      ))}
    </div>
  );
};
export default UserList;
