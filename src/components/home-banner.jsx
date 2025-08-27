import Image from "next/image"

export const HomeBanner = () => {
    return (
        <section className="mx-3 mt-3 mb-3" style={{ height: "calc(100vh - 5.35rem)" }}>
            <div className="grid grid-cols-10 gap-3 h-full">
                {/* Left Hero */}
                <div className="relative col-span-7 rounded-2xl overflow-hidden">
                    <Image
                        fill
                        className="object-cover"
                        src="https://images.unsplash.com/photo-1633253260051-e4598dfbf986?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Resort"
                    />

                    {/* Text Overlay */}
                    <div className="absolute top-10 left-10 text-white max-w-lg">
                        <h1 className="text-5xl font-medium leading-tight">
                            Luxury Retreat on the Abu Dhabi Coast
                        </h1>
                        <p className="mt-4 text-lg opacity-90">
                            Step into a world where luxury meets the serene beauty of the Arabian Gulf.
                            Your perfect escape awaits in an oasis.
                        </p>
                    </div>

                    {/* Small Card Bottom Left */}
                    <div className="absolute bottom-10 left-10 bg-white/20 backdrop-blur-md p-4 border border-muted/30 rounded-xl max-w-sm text-white flex gap-2">
                        <Image
                            width={200}
                            height={120}
                            className="rounded-md w-24 h-24 object-cover aspect-square"
                            src="https://images.unsplash.com/photo-1536469297245-28a06b024f91?q=80&w=600&auto=format&fit=crop"
                            alt="Abu Dhabi Escape"
                        />
                        <div className="flex flex-col gap-2">
                            <h3 className="font-medium">Abu Dhabi Escape Awaits</h3>
                            <p className="text-sm opacity-90">
                                Celebrate the festive season in grand style on the serene shores of Abu Dhabi.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="col-span-3 flex flex-col gap-3">
                    {/* Top Card with Image */}
                    <div className="relative flex-1 rounded-2xl overflow-hidden group">
                        <Image
                            fill
                            className="object-cover"
                            src="https://images.unsplash.com/photo-1718803643833-4ef3b51e5c75?q=80&w=987&auto=format&fit=crop"
                            alt="Sidebar Menu"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:backdrop-blur-sm duration-300 p-6 text-white flex flex-col gap-2.5">
                            {["THE RESORT", "LOYALTY", "AFFILIATE", "CAREERS"].map((item) => (
                                <button key={item} className="flex justify-between items-center text-lg border-b border-b-muted/30 pb-2">
                                    <span>{item}</span>
                                    <span>→</span>
                                </button>
                            ))}
                            <div className="mt-auto">
                                <span className="block text-sm mb-2">Social Media</span>
                                <div className="flex gap-3">
                                    <button>IG</button>
                                    <button>FB</button>
                                    <button>@</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Card with Image */}
                    <div className="relative flex-1 rounded-2xl overflow-hidden group">
                        <Image
                            fill
                            className="object-cover"
                            src="https://images.unsplash.com/photo-1536469297245-28a06b024f91?q=80&w=1030&auto=format&fit=crop"
                            alt="Anantara Resort"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:backdrop-blur-sm duration-300 p-6 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="font-medium text-xl">ANANTARA Resort</h3>
                                <p className="text-sm mt-2 opacity-90">
                                    Every journey should live long in the memory.
                                </p>
                            </div>
                            <button className="mt-6 self-start text-sm underline">READ MORE →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
