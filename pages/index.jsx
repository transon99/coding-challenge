import Img from '@/assets/Img';
import { Button, SEO } from '@/components/common';
import {
  BlogRecommendation,
  ContestItem,
  RecommendContest,
} from '@/components/home';
import { MainLayout } from '@/components/layout';
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

  const blogsList = [
    {
      img: '',
      avatar: '',
      title: 'Giới thiệu đề 500 câu hỏi Python siêu bổ ích',
      des: 'Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc nghiệm Kquiz chọn lọc   &nbsp;   Đề 500 câu hỏi Python chọn lọc   Bộ đề  500 câu hỏi Python  đã vừa được ra mắt với sự chọn lọc kỹ càng về mặt nội dung và chất lượng. Nhằm mục đích đem lại trải nghiệm tốt nhất về mặt kiến thức cũng như luyện tập cho việc củng cố lại nền tảng sau khi học xong khóa học lập trình Python cơ bản trên website HowKteam.',
      date: '6/2/2022',
      comment: 0,
    },
    {
      img: '',
      avatar: '',
      title: 'Giới thiệu đề 500 câu hỏi Python siêu bổ ích',
      des: 'Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc nghiệm Kquiz chọn lọc   &nbsp;   Đề 500 câu hỏi Python chọn lọc   Bộ đề  500 câu hỏi Python  đã vừa được ra mắt với sự chọn lọc kỹ càng về mặt nội dung và chất lượng. Nhằm mục đích đem lại trải nghiệm tốt nhất về mặt kiến thức cũng như luyện tập cho việc củng cố lại nền tảng sau khi học xong khóa học lập trình Python cơ bản trên website HowKteam.',
      date: '6/2/2022',
      comment: 0,
    },
    {
      img: '',
      avatar: '',
      title: 'Giới thiệu đề 500 câu hỏi Python siêu bổ ích',
      des: 'Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc nghiệm Kquiz chọn lọc   &nbsp;   Đề 500 câu hỏi Python chọn lọc   Bộ đề  500 câu hỏi Python  đã vừa được ra mắt với sự chọn lọc kỹ càng về mặt nội dung và chất lượng. Nhằm mục đích đem lại trải nghiệm tốt nhất về mặt kiến thức cũng như luyện tập cho việc củng cố lại nền tảng sau khi học xong khóa học lập trình Python cơ bản trên website HowKteam.',
      date: '6/2/2022',
      comment: 0,
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
          <form action="" method="get" className=" h-[46px]  w-[60%] relative">
            <input
              type="text"
              name=""
              id="search"
              autocomplete="off"
              placeholder="Nhập vào sản phẩm cần tìm..."
              className="border-[#d9d9d9] border-solid rounded-[20px] border-[1px] w-full h-full pl-5"
            />
            <button className="absolute top-0 right-0 w-[15%] h-[46px] rounded-[20px] bg-btn-color flex justify-center items-center">
              <FaSearch />
            </button>
          </form>
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
