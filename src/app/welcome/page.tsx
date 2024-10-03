import { getCookie } from 'cookies-next';
import React, { useEffect, useState } from 'react';

const Welcome = () => {
  const [firstName, setFirstName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {

    const storedFirstName = getCookie('first_name');
    const storedRole = getCookie('user_role');

    setFirstName(storedFirstName || 'Guest');
    setRole(storedRole || '');
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-primary">Hello, {firstName}!</h1>
      {role && <p className="text-xl mt-2">Welcome, {role}</p>}
    </div>
  );
};

export default Welcome;
