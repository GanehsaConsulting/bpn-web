import { LuSearch } from "react-icons/lu"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const SearchArticle = () => {
    return (
        <section className="margin !mt-20 !mb-5">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">
                    Our Articles
                </h1>

                <div className="hidden md:flex items-center gap-2">
                    <Input
                        className={"w-100 bg-lightColor dark:bg-darkColor"}
                placeholder="Search title..."
                    />
                    <Button
                        className={"bg-lightColor dark:bg-darkColor"}
                        size={"icon"}
                    >
                        <LuSearch />
                    </Button>
                </div>
            </div>
        </section>
    )
}