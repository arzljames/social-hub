import { Feed } from "@/features/feed";
import { PeopleYouMayKnow } from "@/features/peopleYouMayKnow";
import { Siderbar } from "@/features/siderbar";
import { Stories } from "@/features/stories";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Social Hub | Feed",
};

export default function Home() {
  return (
    <div className="px-4 py-10 flex items-start justify-center w-full">
      <div>
        <Stories />
        <Feed />
      </div>
      <div>
        <PeopleYouMayKnow />
      </div>
    </div>
  );
}
