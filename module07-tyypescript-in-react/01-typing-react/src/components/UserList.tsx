import { useEffect, useState } from 'react';
import type { ComponentStatus, User } from '../types/user.types';

const userArr: User[] = [
  { id: 1, username: 'Guybrush', info: 'alert' },
  { id: 2, username: 'Anakin', info: 'failure' },
];

const UserList = () => {
  //   const [count, setCount] = useState<number | string>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  //   const [loading, setLoadig] = useState(false);
  //   const [error, setError] = useState<null | string>(null);
  const [status, setStatus] = useState<ComponentStatus>('idle');

  useEffect(() => {
    setStatus('loading');
    // async fetch logic ...
    setUsers(userArr);
    setStatus('success');
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users?.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
    </div>
  );
};
export default UserList;
