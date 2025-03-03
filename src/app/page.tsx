'use client';
import Header from './components/header';

export default function Home() {
  return (
    <div className="py-[3rem]">
      <section className="flex flex-col gap-4 justify-center items-center max-w-[1000px] mx-auto px-[1rem]">
        <Header />
      </section>
    </div>
  );
}
