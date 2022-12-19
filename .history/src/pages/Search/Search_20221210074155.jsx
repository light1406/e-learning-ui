import React from "react";

const Search = () => {
  return (
    <div>
      <p>
        Kết quả tìm kiếm: <span>12</span>
      </p>
      <div className="flex items-center">
        <span className="mr-[20px]">Sắp xếp</span>
        <ul className="flex items-center gap-x-[20px]">
          <li>Sắp xếp</li>
          <li>Sắp xếp</li>
          <li>Sắp xếp</li>
          <li>Sắp xếp</li>
          <li>Sắp xếp</li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
