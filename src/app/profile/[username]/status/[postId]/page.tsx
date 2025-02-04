
import { Image } from "@/components/Image";
import Comments from "@/components/Posts/Comments";
import Post from "@/components/Posts/Post";
import Link from "next/link";

const StatusPage = () => {
    return (
        <div className="">
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
                <Link href="/">
                    <Image path="icons/back.svg" alt="back" width={24} height={24} />
                </Link>
                <h1 className="font-bold text-lg">Post</h1>
            </div>
            <Post type="status" />
            <Comments />
        </div>
    );
};

export default StatusPage;