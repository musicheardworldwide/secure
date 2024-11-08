import Link from 'next/link';

const Header = () => (
  <header className="flex justify-between p-4 bg-gray-800 text-white">
    <h1 className="text-xl">Secure Exchange</h1>
    <nav className="space-x-4">
      <Link href="/">Dashboard</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  </header>
);

export default Header;
