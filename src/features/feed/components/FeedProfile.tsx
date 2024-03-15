import React from "react";
import Image from "next/image";
import { DEFAULT_AVATAR } from "@/constant";

const FeedProfile = () => {
  return (
    <div className="mb-4 flex items-center">
      <Image
        width={40}
        height={40}
        src={DEFAULT_AVATAR}
        alt="Avatar"
        className="rounded-full border mr-2"
      />
      <div>
        <h4 className="font-medium text-sm text-text-primary">
          Arzl James Lao
        </h4>
        <h5 className="text-xs text-gray-500">1h ago • Public</h5>
      </div>
    </div>
  );
};

export default FeedProfile;
