import { LuLoader } from "react-icons/lu";
import { IoArrowDown, } from "react-icons/io5";


export const Pagination = ({ loadMore, loading = false, className }) => {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center py-10">
            <button
                onClick={loadMore}
                disabled={loading}
                className={`${className} flex gap-2 items-center px-4 py-2 group text-sm bg-sec-1 rounded-full font-semibold text-darkColor hover:bg-mainColor/10 dark:hover:bg-baseColor/10 duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                {loading ? (
                    <>
                        Loading... <LuLoader className="animate-spin" />
                    </>
                ) : (
                    <>
                        Load More <IoArrowDown className="group-hover:animate-bounce" />
                    </>
                )}
            </button>
        </div>
    );
};