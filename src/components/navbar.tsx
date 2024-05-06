import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 py-4 mx-8'>
      <ul className='flex items-center justify-between px-4 py-2 text-white mx-4 '>
        <li className='hover:text-green-700'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:text-green-700'>
          <Link href='/about'>Sobre</Link>
        </li>
        <li className='hover:text-green-700'>
          <Link href='/skills'>Skills</Link>
        </li >
        <li className='hover:text-green-700'>
          <Link href='/projects'>Projetos</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
