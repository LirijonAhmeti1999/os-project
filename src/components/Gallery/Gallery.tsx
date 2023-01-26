import { getAllPhotos } from "@api/Gallery/gallery.client";
import { GalleryItem } from "@api/Gallery/gallery";
import { Dialog } from "@headlessui/react";
import { useQuery } from "react-query";

export const Gallery = () => {
  const { data, isLoading, error } = useQuery("photos", getAllPhotos);

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
      <div className="grid gap-2 grid-cols-4">
        {data?.data
          .filter((x) => x.id < 50)
          .map((photos: GalleryItem) => (
            <div
              key={photos.id}
              className="box-wrapper border-2 border-gray-50 rounded-md mb-3 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div className="">
                <img src={photos.url} className="w-24" />
                {/* <p>{product.thumbnailUrl}</p> */}
                <p>{photos.title}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
