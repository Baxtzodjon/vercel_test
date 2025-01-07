import ActiveSlider from "@/components/ActiveSlider";
import Datas from "@/components/Datas";
import LoginForm from "@/components/LoginForm";
import ProductItem from "@/components/Product";
import SliderTeam from "@/components/SliderTeam";
import SwiperCmp from "@/components/SwiperCmp";
import SwiperCmpSec from "@/components/SwiperCmpSec";
import Texts from "@/components/Texts";
import ViewStarts from "@/components/ViewStart";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  // Пример данных для слайдов
  /* const slideData = [
    {
      id: 1,
      title: "Slide 1",
      description: "This is the first slide",
      imageUrl: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Slide 2",
      description: "This is the second slide",
      imageUrl: "https://via.placeholder.com/600x400?text=Slide+2",
    },
    {
      id: 3,
      title: "Slide 3",
      description: "This is the third slide",
      imageUrl: "https://via.placeholder.com/600x400?text=Slide+3",
    },
    {
      id: 4,
      title: "Slide 4",
      description: "This is the fourth slide",
      imageUrl: "https://via.placeholder.com/600x400?text=Slide+4",
    },
    {
      id: 5,
      title: "Slide 5",
      description: "This is the fifth slide",
      imageUrl: "https://via.placeholder.com/600x400?text=Slide+5",
    },
  ]; */

  /* const res = await fetch('http://localhost:3000/api/product');

  const { categories } = await res.json();

  console.log(categories); */

  return (
    <main>

      <div className="container mx-auto px-4">

        <SwiperCmpSec />

      </div>

      <div className="flex items-center justify-center gap-10 m-10">

        {/* <ProductItem /> */}

        {/* {
          data.map((item: any) => (

            <ProductItem item={item} key={item._id} />

          ))
        } */}

      </div>

      {/* <Link href="/123">Click me!</Link> */}

      {/* <Texts text_small="Categories" text_big="Browse By Category" /> */}

      {/* <Datas url="https://jsonplaceholder.typicode.com/comments?_limit=2" /> */}

      {/* <Texts text_small="This Month" text_big="Best Selling Products" /> */}

      <div className="flex items-center justify-center">

        <div className="flex items-center justify-center flex-col gap-10">

          <h1>Swiper.js Example with Responsive Design</h1>

          {/* <SwiperCmp slides={slideData} /> */}

          {/* <SwiperCmp slides={slide} /> */}

        </div>

      </div>

      {/* <Datas url="https://jsonplaceholder.typicode.com/posts?_limit=5" /> */}

      {/* <LoginForm /> */}

      {/* <ActiveSlider /> */}

      <h1 className="text-[#000000] text-[48px] font-semibold leading-[36px] text-center p-10">Main Page</h1>

      <Link href="/admin" target="_blank">Admin</Link>

      {/* <ViewStarts /> */}

      <div className="flex items-center justify-center gap-10 m-10">

        <div className="relative w-[270px] h-[250px] bg-[#F5F5F5] rounded flex items-center justify-center">

          <button className="absolute bottom-0 left-0 w-full h-[41px] bg-[#000000] rounded text-[#FFFFFF] text-[12px] font-normal leading-[18px]">Add To Cart</button>

          <div className="text-[64px] font-semibold leading-[18px]">P</div>

          <button className="absolute top-3 right-3 w-[34px] h-[34px] rounded-full text-white bg-gray-400">D</button>

        </div>

      </div>

      <div className="flex items-center justify-center gap-10 m-10">

        <Link href="/categories/phones" className="w-[175px] h-[145px] bg-[#0000004D] rounded flex items-center justify-center">Phones</Link>

        <Link href="/categories/computers" className="w-[175px] h-[145px] bg-[#0000004D] rounded flex items-center justify-center">Computers</Link>

        <Link href="/categories/smartWatches" className="w-[175px] h-[145px] bg-[#0000004D] rounded flex items-center justify-center">SmartWatch</Link>

        <Link href="/categories/cameras" className="w-[175px] h-[145px] bg-[#0000004D] rounded flex items-center justify-center">Camera</Link>

        <Link href="/categories/headphones" className="w-[175px] h-[145px] bg-[#0000004D] rounded flex items-center justify-center">HeadPhones</Link>

        <Link href="/categories/gaming" className="w-[175px] h-[145px] bg-[#0000004D] rounded flex items-center justify-center">Gaming</Link>

      </div>

    </main>
  );
}
