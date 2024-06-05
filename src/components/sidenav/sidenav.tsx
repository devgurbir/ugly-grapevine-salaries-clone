import Link from "next/link";

export default function Sidenav() {
  return (
    <div className="hidden md:block col-span-5 tablet:col-span-4 xl:col-span-3 overflow-auto pb-5">
      {/* <section className="bg-white dark:bg-darkGrey-10 rounded-[16px] h-full grid border-grey-20 dark:border-darkGrey-20 border"> */}
      <section className="bg-white rounded-[16px] h-full grid border-grey-20 border">
        <div className="px-6 pt-6 flex flex-col gap-3">
          <Link href="/home">
            <div className="flex gap-2 py-2 cursor-pointer text-btn text-grey-70 dark:text-darkGrey-70 style_home_feed_text_btn__VD9NM">
              <span className="title-large-MB font-weight  text-Primary">
                Home Feed
              </span>
            </div>
          </Link>
          <div className="w-full h-[1px] bg-grey-20 dark:bg-darkGrey-20 my-3"></div>
        </div>
      </section>
    </div>
  );
}
