const UserStatus = ({ isLoggedIn, isAdmin }) => {
  if (isLoggedIn && isAdmin) return <h1>Welcome Admin</h1>;
  if (isLoggedIn && !isAdmin) return <h1>Welcome User</h1>;
};
export default UserStatus;
