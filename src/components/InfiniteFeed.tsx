"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Posts/Post";
import { PostLoader } from "./Skeletons/PostLoader";

const fetchPosts = async (pageParam: number, userProfileId?: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/post?cursor=` +
      pageParam +
      "&user=" +
      userProfileId
  );
  return res.json();
};

const InfiniteFeed = ({ userProfileId }: { userProfileId?: string }) => {
  // fetching posts using react query
  const { data, error, status, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 2 }) => fetchPosts(pageParam, userProfileId),
    initialPageParam: 2,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 2 : undefined,
  });

  if (error) return "Something went wrong!!";
  if (status === "pending") return "Loading...................";

  console.log("data", data);
  const allPosts = data?.pages?.flatMap((pages) => pages.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={
        <div className="mt-4">
          <PostLoader />
        </div>
      }
      endMessage={
        <p className="text-center text-gray-500 my-4">
          You have reached the end! No more posts to load.
        </p>
      }
    >
      {allPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteFeed;
