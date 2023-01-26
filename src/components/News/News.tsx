import { NewsInterface } from "@api/News/news";
import { getAllNews } from "@api/News/news.client";
import { Dialog } from "@headlessui/react";
import { useQuery } from "react-query";

export const News = () => {
  const { data, isLoading, error } = useQuery("news", getAllNews);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="h-full overflow-y-scroll">
      <Dialog.Title
        as="h1"
        className="text-3xl font-bold leading-6 text-gray-900 mb-5"
      >
        News
      </Dialog.Title>
      {data?.data
        .filter((x) => x.id < 50)
        .map((news: NewsInterface) => (
          <div
            key={news.id}
            className="box-wrapper border-2 border-gray-50 rounded-md mb-3 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <div className="flex">
              <h1 className="font-bold text-xl">
                {news.id}
                {news.name}
              </h1>
            </div>
            <div>
              <p>{news.email}</p>
              <p>{news.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
