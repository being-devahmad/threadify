import Feed from "@/components/Feed";
import Share from "@/components/Share";
import { prisma } from "@/utils/prisma";
import Link from "next/link";

export default function Home() {

  async function main() {
    const allUsers = await prisma.user.delete({
      where: {
        id: "123"
      }
    })
  }

  return (
    <>
      <div>
        <div className='px-4 pt-4 flex justify-evenly text-textGray font-bold border-b-[1px] border-borderGray'>
          <Link className="pb-3 flex items-center border-b-4 border-iconBlue" href="/">For you</Link>
          <Link className="pb-3 flex  items-center" href="/">Following</Link>
        </div>
        <Share />
        <Feed />
      </div>;
    </>
  )
}
