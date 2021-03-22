import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
// import axios from "axios";
// import { User } from "./types/api/user";
// import { UserProfile } from "./types/userProfile";
// import { useState } from "react";

// const user = {
//   id: 1,
//   name: "圭一",
//   email: "kk@kk.com",
//   address: "localhost:8001"
// }

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const onClickFetchUser = () => {
  //   setLoading(true);
  //   setError(false);

  //   axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     const data = res.data.map((user) => ({
  //       id: user.id,
  //       name: `${user.name}(${user.username})`,
  //       email: user.email,
  //       address: `${user.address.city}${user.address.suite}${user.address.street}`,
  //     }));
  //     setUserProfiles(data);
  //   })
  //   .catch(() => {
  //     setError(true);
  //   })
  //   .finally(() => {
  //     setLoading(false);
  //   });
  // };

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))} 
        </>
      )}         
    </div>
  );
}
