import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import Link from "next/link";
import { Image } from "../Image";
import { Post as PostType } from "@prisma/client";
import { format } from "timeago.js";
// import Video from "../Video";
// import { imagekit } from "@/utils/imagekit";

// interface FileDetailsResponse {
//   width: number;
//   height: number;
//   filePath: string;
//   url: string;
//   fileType: string;
//   customMetadata?: { sensitive: boolean };
// }

type PostWithDetails = PostType & {
  user: {
    displayName: string;
    username: string;
    profilePic: string | null;
  };
};

const Post = ({
  type,
  post,
}: {
  type?: "status" | "comment";
  post: PostWithDetails;
}) => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        {post.rePostId && <span>{post.user.displayName} reposted</span>}
      </div>
      {/* POST CONTENT */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* AVATAR */}
        <div
          className={`${
            type === "status" && "hidden"
          } relative w-10 h-10 rounded-full overflow-hidden`}
        >
          <Image
            path="general/avatar.png"
            alt=""
            width={100}
            height={100}
            tr={true}
          />
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-2">
          {/* TOP */}
          <div className="w-full flex justify-between">
            <Link href={`/profile/lamaWebDev`} className="flex gap-4">
              {post.user.profilePic && (
                <div
                  className={`${
                    type !== "status" && "hidden"
                  } relative w-10 h-10 rounded-full overflow-hidden`}
                >
                  <Image
                    path={post.user.profilePic}
                    alt=""
                    width={100}
                    height={100}
                    tr={true}
                  />
                </div>
              )}
              <div
                className={`flex items-center gap-2 flex-wrap ${
                  type === "status" && "flex-col gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">{post.user.displayName}</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @{post.user.username}
                </span>
                {type !== "status" && (
                  <span className="text-textGray">
                    {format(post.createdAt)}
                  </span>
                )}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <Link href={`/profile/lamaWebDev/status/123`}>
            <p className={`${type === "status" && "text-lg"}`}>
              {post.description}
            </p>
          </Link>
          {/* {
                        fileDetails &&
                        <Image
                            path={fileDetails.filePath}
                            alt={fileDetails.filePath}
                            width={fileDetails.width}
                            height={fileDetails.height}
                            // className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
                        />
                    } */}

          {/* {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              width={fileDetails.width}
              height={fileDetails.height}
              // className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )} */}

          {post.image && (
            <Image path={post.image} alt="" width={600} height={600} />
          )}

          {type === "status" && (
            <span className="text-textGray">8:41 PM · Dec 5, 2024</span>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
