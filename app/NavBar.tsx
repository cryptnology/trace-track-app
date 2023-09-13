'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NavBar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link className="ml-3" href="/api/auth/signout">
            Sign Out
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
