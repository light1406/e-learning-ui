import React from "react";
import Banner from "@components/Banner";
import Course from "@components/Course";
import New from "@components/New";
import Expert from "@components/Expert";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="my-[60px]">
        <h1 className="text-[24px] font-bold text-center uppercase mb-12">
          Những lý do bạn nên chọn chúng tôi
        </h1>
        <div className="flex items-center justify-between gap-x-[30px]">
          <img
            className="max-w-[450px]"
            src="https://kt.city/static/img-experts1.png"
            alt=""
          />
          <div className="">
            <h1 className="mb-6 text-[24px] font-extrabold">
              Nâng cao kiến thức của bạn lên từng ngày, có kết quả tương xứng
              với chi phí bỏ ra
            </h1>
            <p>
              Tất cả kiến thức tại XXX đều được review bởi đội ngũ chuyên gia có
              kinh nghiệm. Hãy chọn Expert hoặc Brand mà bạn tin tưởng & bắt đầu
              trải nghiệm. Bạn cũng có thể theo lời khuyến nghị của những cá
              nhân đã trải nghiệm trước đó, người bạn quen hoặc các KOLs để lựa
              chọn kiến thức phù hợp.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-[30px]">
          <div className="">
            <h1 className="mb-6 text-[24px] font-extrabold">
              Trở thành Expert hoặc Brand, chia sẻ kiến thức & nhận lại không
              giới hạn giá trị
            </h1>
            <p>
              Xây dựng cộng đồng của riêng bạn & nhận lại không giới hạn giá
              trị. XXX & hệ thống đối tác sẽ quảng bá kiến thức hữu ích tới hàng
              trăm ngàn cá nhân có nhu cầu cải thiện chuyên môn. XXX tập trung
              xây dựng hình ảnh, thương hiệu cho bạn 1 cách hoàn chỉnh. Ngoài
              ra, tất cả các vấn đề về công nghệ luôn được tối ưu.
            </p>
          </div>
          <img
            className="max-w-[450px]"
            src="https://kt.city/static/img-experts2.png"
            alt=""
          />
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-center text-[24px] font-bold mb-[40px]">
          Học tập xu hướng MMO, kinh doanh, tiếp thị số mới và nổi bật 2022
        </h1>
        <Expert></Expert>
      </div>
     
      </div>
    </div>
  );
};

export default Home;
