import Link from 'next/link';
import React from 'react';

const AuthLinks = () => {
  // just temporary
  const status = 'notauthenticated';
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
