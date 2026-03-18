import { useEffect, useState } from 'react';
import type { ComponentStatus, User } from '../types';

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
    const loadUsers = async () => {
      setStatus('loading');
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
      setStatus('success');
    };
    loadUsers();
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
