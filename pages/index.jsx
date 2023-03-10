import Img from '@/assets/Img';
import { Button, SEO } from '@/components/common';
import {
  BlogRecommendation,
  ContestItem,
  RecommendContest,
} from '@/components/home';
import { MainLayout } from '@/components/layout';
import { blogsList } from '@/fakeData';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

function Home({ time }) {
  const contestList = [
    {
      img: '',
      contest: 'C++',
      numQues: 923,
    },
    {
      img: '',
      contest: 'C++',
      numQues: 923,
    },
    {
      img: '',
      contest: 'C++',
      numQues: 923,
    },
    {
      img: '',
      contest: 'C++',
      numQues: 923,
    },
  ];

  return (
    <main>
      <SEO
        data={{
          title: 'Coding Challenges',
          description: 'Thử thách trình độ coding của bạn',
          url: 'https://full-stack-project-s7xg.vercel.app/',
          thumbnailURL:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkienthucphanmem.com%2Fwiki%2Fcode-convention-la-gi%2F&psig=AOvVaw1YkjLc8pyYWbyifW2vgiV-&ust=1673077580198000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOig--e5svwCFQAAAAAdAAAAABAE',
        }}
      />

      {/*  Slider and search box */}
      <div className="mt-28">
        <div className=" mx-auto flex justify-between">
          <div className="w-[70%]">
            <h1 className="text-center font-bold text-3xl">
              Bắt đầu thử thách với thi trắc nghiệm
            </h1>
            <p className="text-center ">
              Ngân hàng đề thi trắc nghiệm đa dạng, dành riêng cho cộng đồng lập
              trình từ cơ bản đến nâng cao. Cùng Kquiz: "Luyện tập, thử thách,
              không ngại khó!"
            </p>
          </div>
          <Image
            src={Img.learnCode}
            alt="learn-code"
            className="w-60 h-72 rounded-lg object-cover"
          />
        </div>
        <div className=" h-full mx-auto flex justify-between items-center">
          <Image
            src={Img.learnCode1}
            alt="learn-code"
            className="w-60 h-72 rounded-lg object-cover"
          />
          <div className="h-[56px]  w-[70%] relative">
            <form action="" method="get" className="w-full h-full ">
              <input
                type="text"
                name=""
                id="search"
                autoComplete="off"
                placeholder="Nhập vào từ khóa cần tìm..."
                className="border-[#d9d9d9] border-solid rounded-md border-[1px] w-full h-full pl-5 py-1"
              />
              <div className="">
                <button className="absolute top-0 right-0 w-[15%] h-full rounded-md bg-btn-color flex justify-center items-center">
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Random contest */}
      <div className="mt-28">
        <div className="w-[60%] mx-auto flex flex-col items-center">
          <h1 className="text-center font-bold text-3xl">
            Bắt đầu thử thách với thi trắc nghiệm
          </h1>
          <p className="text-center mb-10">
            Ngân hàng đề thi trắc nghiệm đa dạng, dành riêng cho cộng đồng lập
            trình từ cơ bản đến nâng cao. Cùng Kquiz: "Luyện tập, thử thách,
            không ngại khó!"
          </p>
          <div>
            <Button content="Thi ngay" />
          </div>
        </div>
      </div>
      {/* Contest by concept */}

      <div className="mt-28">
        <h1 className="text-center font-bold text-3xl mb-10">
          Trắc nghiệm theo chủ đề
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contestList.map((contest, index) => (
            <ContestItem key={index} contest={contest} />
          ))}
        </div>
      </div>
      {/* Popular Contest */}

      <div className="mt-28">
        <h1 className="text-center font-bold text-3xl mb-10">Đề thi nổi bật</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contestList.map((contest, index) => (
            <RecommendContest key={index} contest={contest} />
          ))}
        </div>
      </div>
      {/* Blog recommendation */}

      <div className="mt-28 flex flex-col">
        <h1 className="text-center font-bold text-3xl mb-10">
          Bài viết đáng quan tâm
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsList.map((blog, index) => (
            <BlogRecommendation key={index} blog={blog} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button content={'Xem thêm'} />
        </div>
      </div>
      {/* Attractive User */}

      <div className="mt-28 flex flex-col">
        <h1 className="text-center font-bold text-3xl mb-10">
          Bài viết đáng quan tâm
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsList.map((blog, index) => (
            <BlogRecommendation key={index} blog={blog} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button content={'Xem thêm'} />
        </div>
      </div>
      {/* Feedback */}
    </main>
  );
}

export function getStaticProps() {
  console.log('re-running  getStatic Props');
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 5,
  };
}

Home.Layout = MainLayout;

export default Home;
