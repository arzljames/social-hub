import React from "react";
import FeedProfile from "./components/FeedProfile";
import { HiOutlineHeart, HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

const Feed = () => {
  return (
    <>
      <h2 className="text-sm font-medium text-gray-500 mb-4">Your Feed</h2>
      <div className="p-4 flex flex-col border-[1px] flex-1 max-w-[600px] rounded-lg relative">
        <FeedProfile />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
        laudantium minus hic doloremque dolore facere dolorem iusto praesentium
        labore excepturi delectus reprehenderit officiis, molestiae maiores
        suscipit reiciendis mollitia est, tempora expedita nesciunt dolores
        cumque quod explicabo rerum. Nemo quasi odio officia optio beatae
        laboriosam quia, veritatis, deserunt laborum a distinctio modi quibusdam
        atque adipisci necessitatibus quae quod, autem eum molestiae tempore
        consequuntur nostrum. Quod quos est vitae suscipit expedita optio, totam
        laborum illo, maiores tenetur voluptatibus ipsum facere mollitia qui
        nulla debitis aperiam sit dolorum deserunt? Perferendis, non excepturi
        facilis commodi saepe corporis laudantium! Asperiores nostrum officia
        sed. Laudantium, minus?
        <div className="mt-8 flex items-center justify-between">
          <div className="flex">
            <div className="flex items-center mr-4">
              <p className="text-sm text-text-primary mr-1">23</p>
              <HiOutlineHeart />
            </div>
            <div className="flex items-center">
              <p className="text-sm text-text-primary mr-1">9</p>
              <HiOutlineChatBubbleLeft />
            </div>
          </div>
          <div>
            <HiOutlineBookmark />
          </div>
        </div>
        <p className="my-2 text-sm text-gray-500 cursor-pointer hover:underline">
          Read 8 more comments
        </p>
      </div>
    </>
  );
};

export default Feed;
