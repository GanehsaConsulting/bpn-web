import Image from "next/image";

export const HomeBanner = () => {
  return (
    <section
      className="mx-3 mt-3 mb-3"
      style={{ height: "calc(100vh - 5.35rem)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-1.5 sm:gap-3 h-full">
        {/* Left Hero */}
        <div className="relative lg:col-span-7 rounded-main overflow-hidden h-[70vh] lg:h-auto">
          <Image
            fill
            className="object-cover"
            src="https://images.unsplash.com/photo-1633253260051-e4598dfbf986?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Resort"
          />

          {/* Text Overlay */}
          <div className="absolute top-4 left-4 right-4 lg:top-10 lg:left-10 lg:right-auto text-white lg:max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Luxury Retreat on the Abu Dhabi Coast
            </h1>
            <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg opacity-90 max-w-md lg:max-w-none">
              Step into a world where luxury meets the serene beauty of the
              Arabian Gulf. Your perfect escape awaits in an oasis.
            </p>
          </div>

          {/* Small Card Bottom Left */}
          <div className="absolute bottom-4 left-4 right-4 lg:bottom-10 lg:left-10 lg:right-auto bg-white/20 backdrop-blur-md p-3 lg:p-4 border border-muted/30 rounded-xl lg:max-w-sm text-white flex gap-2">
            <Image
              width={200}
              height={120}
              className="rounded-md w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-cover aspect-square flex-shrink-0"
              src="https://images.unsplash.com/photo-1536469297245-28a06b024f91?q=80&w=600&auto=format&fit=crop"
              alt="Abu Dhabi Escape"
            />
            <div className="flex flex-col gap-1 lg:gap-2">
              <h3 className="font-medium text-xs sm:text-sm lg:text-base">Abu Dhabi Escape Awaits</h3>
              <p className="text-xs lg:text-sm opacity-90">
                Celebrate the festive season in grand style on the serene shores
                of Abu Dhabi.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-1.5 sm:gap-3 h-[30vh] lg:h-auto">
          {/* Top Card with Image */}
          <div className="relative flex-1 rounded-main overflow-hidden group">
            <Image
              fill
              className="object-cover"
              src="https://images.unsplash.com/photo-1718803643833-4ef3b51e5c75?q=80&w=987&auto=format&fit=crop"
              alt="Sidebar Menu"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:backdrop-blur-sm duration-300 p-4  lg:p-6 text-white flex flex-col gap-1 sm:gap-1.5 lg:gap-2.5">
              {["THE RESORT", "LOYALTY", "AFFILIATE", "CAREERS"].map((item) => (
                <button
                  key={item}
                  className="flex justify-between items-center text-[10px] sm:text-xs lg:text-lg border-b border-b-muted/30 pb-1 lg:pb-2"
                >
                  <span>{item}</span>
                  <span>→</span>
                </button>
              ))}
              <div className="mt-auto">
                <span className="block text-[8px] sm:text-[10px] lg:text-sm mb-1 lg:mb-2">Social Media</span>
                <div className="flex gap-1 sm:gap-2 lg:gap-3">
                  <button className="text-[8px] sm:text-[10px] lg:text-sm">IG</button>
                  <button className="text-[8px] sm:text-[10px] lg:text-sm">FB</button>
                  <button className="text-[8px] sm:text-[10px] lg:text-sm">@</button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card with Image */}
          <div className="relative flex-1 rounded-main overflow-hidden group">
            <Image
              fill
              className="object-cover"
              src="https://images.unsplash.com/photo-1536469297245-28a06b024f91?q=80&w=1030&auto=format&fit=crop"
              alt="Anantara Resort"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:backdrop-blur-sm duration-300 p-4 lg:p-6 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-medium text-xs sm:text-sm lg:text-xl">ANANTARA Resort</h3>
                <p className="text-[10px] sm:text-xs lg:text-sm mt-1 lg:mt-2 opacity-90">
                  Every journey should live long in the memory.
                </p>
              </div>
              <button className="mt-2 lg:mt-6 self-start text-[10px] sm:text-xs lg:text-sm underline">
                READ MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};