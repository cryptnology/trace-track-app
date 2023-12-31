import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from './api/auth/authOptions';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
    </main>
  );
};

export default Home;
