export const UsersList = ({ users, setCurrUser, currUser }) => {
  return (
    <div className="row1">
      {users.map((u, i) => {
        return (
          <div
            key={`${u.notes}@${i}`}
            onClick={() => setCurrUser(i)}
            className={currUser === i ? "selected" : ""}
          >
            {u.name}
          </div>
        );
      })}
    </div>
  );
};
