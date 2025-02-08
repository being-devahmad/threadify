export function PostLoader() {
  return (
    <div className="p-4 border-y-[1px] border-borderGray animate-pulse">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-bold">
        <div className="w-[18px] h-[18px] bg-textGray rounded"></div>
        <div className="h-4 w-32 bg-textGray rounded"></div>
      </div>
      {/* POST CONTENT */}
      <div className="flex gap-4">
        {/* AVATAR */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-textGray"></div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-2">
          {/* TOP */}
          <div className="w-full flex justify-between">
            <div className="flex gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="h-5 w-24 bg-textGray rounded"></div>
                <div className="h-4 w-20 bg-textGray rounded"></div>
                <div className="h-4 w-16 bg-textGray rounded"></div>
              </div>
            </div>
            <div className="w-8 h-8 bg-textGray rounded-full"></div>
          </div>
          {/* TEXT & MEDIA */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-textGray rounded"></div>
            <div className="h-4 w-full bg-textGray rounded"></div>
            <div className="h-4 w-2/3 bg-textGray rounded"></div>
          </div>
          <div className="w-full h-64 bg-textGray rounded"></div>
          <div className="flex justify-between">
            <div className="h-6 w-12 bg-textGray rounded"></div>
            <div className="h-6 w-12 bg-textGray rounded"></div>
            <div className="h-6 w-12 bg-textGray rounded"></div>
            <div className="h-6 w-12 bg-textGray rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
