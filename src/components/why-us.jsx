import { Title } from "./title";
import { FaUserTie, FaCog, FaTrophy, FaHandshake } from "react-icons/fa";

export const WhyUs = () => {
    const whyChooseUs = [
        {
            title: "Expertise",
            description:
                "Our team possesses extensive experience and unmatched knowledge in transforming businesses and optimizing human capital.",
            icon: <FaUserTie />
        },
        {
            title: "Tailored Solutions",
            description:
                "We develop customized solutions that are uniquely designed to align with your specific needs and objectives.",
            icon: <FaCog />
        },
        {
            title: "Proven Results",
            description:
                "Our history of successful partnerships showcases our ability to drive sustainable growth and deliver lasting impact.",
            icon: <FaTrophy />
        },
        {
            title: "Client-Focused Approach",
            description:
                "We prioritize fostering strong relationships and collaborating closely with you to achieve measurable success.",
            icon: <FaHandshake />
        },
    ];

    return (
        <main className="margin">
            <Title>
                Why Us?
            </Title>
            <section className="mt-10" >

                {/* Desktop Layout */}
                <div className=" grid lg:grid-cols-4 gap-3 overflow-x-auto">
                    {whyChooseUs.map((el, idx) => (
                        <div key={idx}>
                            <div className="flex items-center gap-2 p-4 bg-main-3 text-darkColor dark:bg-main-1 rounded-main pb-15">
                                <div className="text-2xl p-3 bg-main-4 w-fit rounded-full">
                                    {el.icon}
                                </div>

                                <h1 className="text-xl font-bold">
                                    {el.title}
                                </h1>
                            </div>
                            <p className="-mt-12 p-4 bg-white border-main-3 dark:border-main-1 border-2 dark:bg-black rounded-main text-lg text-justify text-muted-foreground h-40">
                                {el.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}