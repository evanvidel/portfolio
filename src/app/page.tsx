import Button from '@/components/button';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center'>
      <Image
        className='rounded-full m-8'
        src='/profile.jpg'
        width={300}
        height={300}
        alt='Picture of the author'
      />
      <h1 className='text-4xl'>Evangelista Franco</h1>
      <h2 className='text-3xl mb-4'>Desenvolvedor Front-end</h2>
      <p className='text-2xl m-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore
        minima esse amet ex, eius totam, repellendus eveniet explicabo dolores
        quis ipsam quos minus, atque placeat? Nemo in itaque dicta?
      </p>
      <Button />
      
      <>
      <section className=' flex  flex-col items-center justify-center'>
        <h1>Projects</h1>

        <div 
          className='rounded-lg px-8 bg-transparent border-solid 
      border-2 border-[#232323] w-full h-full'
        ></div>
        <div
          className='rounded-lg px-8 bg-transparent border-solid 
      border-2 border-[#232323] w-full h-96'
        ></div>
        <div
          className='rounded-lg px-8 bg-transparent border-solid 
      border-2 border-[#232323] w-full h-96'
        ></div>
      </section>
      </>
      </div>
  );
};
export default HomePage;
