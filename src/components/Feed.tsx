// 'use client'

import React from "react";
import Post from "./Posts/Post";
import { prisma } from "@/utils/prisma";
import { auth } from "@clerk/nextjs/server";
import InfiniteFeed from "./InfiniteFeed";

const Feed = async ({ userProfileId }: { userProfileId?: string }) => {
  const { userId } = await auth();

  if (!userId) return;

  //   first of all we'll check if user is on homepage or on own profile page, if it is on own profile page then his own posts should be displayed to him otherwise he can see both type of posts, his followings or his own even too.

  const followings = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });
  // const ids = followings.map((f) => f.followingId);

  // console.log("followingsIds--->", ids);

  const userOnProfilePage = userProfileId
    ? { parentPostId: null, userId: userProfileId }
    : {
        parentPostId: null, // means we don't want to fetch any comments
        userId: {
          in: [userId, ...followings.map((f) => f.followingId)],
        },
      };

  // FETCH POSTS FROM FOLLOWING USERS AND OWN POSTS on feed display
  const posts = await prisma.post.findMany({
    where: userOnProfilePage,
    include: {
      user: {
        select: {
          displayName: true,
          username: true,
          profilePic: true,
        },
      },
    },
    take: 3,
    skip: 0,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Post post={post} />
            From Server
          </div>
        );
      })}
      <InfiniteFeed />
    </div>
  );
};

export default Feed;
