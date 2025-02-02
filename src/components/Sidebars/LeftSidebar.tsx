import { menuList } from "@/constants";
import Image from "next/image";
import Link from "next/link";


const LeftSidebar = () => {
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
            {/* LOGO MENU BUTTON */}
            <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
                {/* LOGO */}
                <Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
                    {/* <Image path="icons/logo.svg" alt="logo" w={24} h={24} /> */}
                </Link>
                {/* MENU LIST */}
                <div className="flex flex-col gap-4">
                    {menuList.map((item) => (
                        <Link
                            href={item.link}
                            className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
                            key={item.id}
                        >
                            <Image
                                src={`icons/${item.icon}`}
                                alt={item.name}
                                width={24}
                                height={24}
                            />
                            <span className="hidden xxl:inline">{item.name}</span>
                        </Link>
                    ))}
                </div>
                {/* BUTTON */}
                <Link
                    href="/compose/post"
                    className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
                >
                    <Image src="icons/post.svg" alt="new post" width={24} height={24} />
                </Link>
                <Link
                    href="/compose/post"
                    className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
                >
                    Post
                </Link>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image src="/general/avatar.png" alt="lama dev" width={100} height={100}  />
                    </div>
                    <div className="hidden xxl:flex flex-col">
                        <span className="font-bold">Lama Dev</span>
                        <span className="text-sm text-textGray">@lamaWebDev</span>
                    </div>
                </div>
                <div className="hidden xxl:block cursor-pointer font-bold">...</div>
            </div>
        </div>
    );
};

export default LeftSidebar;