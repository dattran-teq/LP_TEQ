"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Button from "./common/Button";

// type Props = {
//     image : StaticImageData
//     product : string
// }

interface IMember {
  id: number;
  image: string;
  title: string;
  date: string;
}

const LatestNews: React.FC = () => {
  const [lisMember, setlisMember] = useState<IMember[]>([]);
  const [limitNews, setLimitNews] = useState(3);

  const getData = async () => {
    const res = await axios.get(
      "https://api.eazy-mock.teqn.asia/mock/9e54b086-3c0b-46d2-b859-b3ccb8e5a2e5/228/news"
    );

    if (res.data && Array.isArray(res.data.list)) {
      setlisMember(res.data.list);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const expandNews = () => {
    setLimitNews(lisMember.length);
  };

  return (
    <div className="flex flex-wrap gap-4 mx-auto px-[104px] mt-[48px]">
      {lisMember.slice(0, limitNews).map((news) => {
        return (
          <div
            key={news.id}
            className="flex flex-col gap-4 items-center overflow-hidden"
          >
            <Image src={news.image} width={387} height={282} alt="image" />
            <div className="w-[387px] h-[80px]">
              <div className="line-clamp-2">{news.title}</div>
              <div>{dayjs(news.date).format("DD/MM/YYYY")}</div>
            </div>
          </div>
        );
      })}
      {limitNews === lisMember.length ? (
        <></>
      ) : (
        <Button content="READ MORE" onClick={expandNews} />
      )}
    </div>
  );
};
export default LatestNews;
