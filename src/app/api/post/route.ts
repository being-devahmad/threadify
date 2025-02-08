import { prisma } from "@/utils/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userProfileId = searchParams.get("user");
  const page = searchParams.get("cursor");
  const LIMIT = 3;

  const { userId } = await auth();

  if (!userId) return;

  const followings = await prisma.follow.findMany({
    where: { followerId: userId },
    select: { followingId: true },
  });

  const userOnProfilePage =
    userProfileId !== "undefined"
      ? { parentPostId: null, userId: userProfileId as string }
      : {
          parentPostId: null,
          userId: {
            in: [userId, ...followings.map((f) => f.followingId)],
          },
        };

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
    take: LIMIT,
    skip: (Number(page) - 1) * LIMIT,
    // let's suppose we're on page no 2 then it mean 2-1 = 1 * 3 (limit=3) = 3 so we'll skip first 3 posts in the page 2
  });

  const totalPosts = await prisma.post.count({
    where: userOnProfilePage,
  });

  const hasMore = Number(page) * LIMIT < totalPosts;

  //   to make a delay or make it slower
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Response.json({ posts, hasMore });
}
