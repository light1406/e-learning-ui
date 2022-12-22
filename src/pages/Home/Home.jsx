import React, { useEffect } from "react";
import Banner from "@components/Banner";
import Course from "@components/Course";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_BY_ID } from "../../reduxs/types/userTypes";
import { GET_NEW_UPDATE } from "../../reduxs/types/homeTypes";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const newUpdate = useSelector((state) => state.home.newUpdate);

  useEffect(() => {
    const userId = sessionStorage.getItem("user-id");
    if (userId) {
      dispatch({
        type: GET_USER_BY_ID,
        id: userId,
      });
    }
  });

  useEffect(() => {
    dispatch({
      type: GET_NEW_UPDATE,
    });
  }, [dispatch]);

  return (
    <div className="">
      <Banner></Banner>
      <div className="container__page">
        <div className="mb-[3rem]">
          <h2 className="flex items-center gap-x-6 mb-[2.5rem] heading-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(250, 94, 94)"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            Mới update
          </h2>
          <div className="slider__home">
            {newUpdate.map((course) => {
              return (
                <Course
                  id={course.id}
                  key={course.id}
                  coverUrl={course.coverUrl}
                  courseName={course.title}
                  manufacture={course.manufacture}
                  price={course.price}
                />
              );
            })}
          </div>
        </div>
        <button className="mt-[3rem] block font-medium py-2 px-6 rounded-2xl bg-lightBlue text-lightBlack mx-auto">
          Xem thêm...
        </button>
        <div className="py-[3rem]">
          <div className="md:grid md:grid-cols-auto md:gap-x-[3rem] mb-[5rem] md:items-center md:mb-[10rem]">
            <img
              className="max-w-[450px] mx-auto mb-[1rem]"
              src="https://kt.city/static/img-experts1.png"
              alt=""
            />
            <div className="">
              <h1 className="p-expert__heading">
                Nâng cao kiến thức của bạn lên từng ngày, có kết quả tương xứng
                với chi phí bỏ ra
              </h1>
              <p className="p-expert__text">
                Tất cả kiến thức tại XXX đều được review bởi đội ngũ chuyên gia
                có kinh nghiệm. Hãy chọn Expert hoặc Brand mà bạn tin tưởng &
                bắt đầu trải nghiệm.
              </p>
              <p className="p-expert__text">
                Bạn cũng có thể theo lời khuyến nghị của những cá nhân đã trải
                nghiệm trước đó, người bạn quen hoặc các KOLs để lựa chọn kiến
                thức phù hợp.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-auto md:gap-x-[3rem] mb-[5rem]  md:items-center md:mb-[10rem]">
            <div className="order-2 md:order-1">
              <h1 className="p-expert__heading">
                Trở thành Expert hoặc Brand, chia sẻ kiến thức & nhận lại không
                giới hạn giá trị
              </h1>
              <p className="p-expert__text">
                Xây dựng cộng đồng của riêng bạn & nhận lại không giới hạn giá
                trị. XXX & hệ thống đối tác sẽ quảng bá kiến thức hữu ích tới
                hàng trăm ngàn cá nhân có nhu cầu cải thiện chuyên môn.
              </p>
              <p className="p-expert__text">
                XXX tập trung xây dựng hình ảnh, thương hiệu cho bạn 1 cách hoàn
                chỉnh. Ngoài ra, tất cả các vấn đề về công nghệ luôn được tối
                ưu.
              </p>
            </div>
            <img
              className="max-w-[450px] mx-auto mb-[1rem] order-1 md:order-2"
              src="https://kt.city/static/img-experts2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
