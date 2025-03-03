'use client';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardGroup from './components/cardGroup';
import Header from './components/header';

export default function Home() {
  const [data,] = useState([
    {
      image: "/images/1.jpg",
      title: "$4500",
      description: "Card 1",
      price: "-S$144.60",
      time: "10:00 AM",
      type: "Main"
    },
    {
      image: "/images/2.jpg",
      title: "Card 2",
      description: "Card 2",
      price: "-S$1550",
      time: "10:00 AM",
      type: "Main"
    },
    {
      image: "/images/3.jpg",
      title: "Card 3",
      description: "Card 3",
      price: "-S$1550",
      time: "10:00 AM",
      type: "Main"
    },
    {
      image: "/images/4.jpg",
      title: "Card 3",
      description: "Card 3",
      price: "-S$1550",
      time: "10:00 AM",
      type: "Main"
    },
    {
      image: "/images/5.jpg",
      title: "Card 2",
      description: "Card 2",
      price: "-S$1550",
      time: "10:00 AM",
      type: "Main"
    },
  ]);

  
  return (
    <div className="py-[3rem]">
      <section className="flex flex-col gap-4 justify-center items-center max-w-[1000px] mx-auto px-[1rem]">
        <Header />
        <CardGroup data={data} />
      </section>
    </div>
  );
}
