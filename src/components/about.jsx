import Image from "next/image"
import { FaUserTie, FaCog, FaTrophy, FaHandshake } from "react-icons/fa";
import {
    PiUser,       // mirip FaUserTie (user/profile)
    PiGear,       // mirip FaCog (settings)
    PiTrophy,     // mirip FaTrophy (trophy/achievement)
    PiHandshake   // mirip FaHandshake (handshake/partnership)
} from "react-icons/pi";
import { Title } from "./title";
export const About = () => {
    const whyUs = [
        {
            title: "Expertise",
            description:
                "Our team possesses extensive experience and unmatched knowledge in transforming businesses and optimizing human capital.",
            icon: <PiUser />
        },
        {
            title: "Tailored Solutions",
            description:
                "We develop customized solutions that are uniquely designed to align with your specific needs and objectives.",
            icon: <PiGear />
        },
        {
            title: "Proven Results",
            description:
                "Our history of successful partnerships showcases our ability to drive sustainable growth and deliver lasting impact.",
            icon: <PiTrophy />
        },
        {
            title: "Client-Focused Approach",
            description:
                "We prioritize fostering strong relationships and collaborating closely with you to achieve measurable success.",
            icon: <PiHandshake />
        },
    ];
    return (
        <section className="margin">
            <div className="grid grid-cols-2 gap-12">
                <div>
                    <Title>
                        About Us
                    </Title>
                    <div className="grid grid-cols-2 gap-7 my-14">
                        <p className="text-sm text-justify text-neutral-500 dark:text-neutral-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae facilis sint architecto saepe nam, deleniti alias doloremque, provident pariatur ratione ea sequi magni maxime. Repellat sint excepturi modi vitae quis.
                        </p>

                        <p className="text-sm text-justify text-neutral-500 dark:text-neutral-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, corrupti obcaecati suscipit labore architecto fugit corporis consectetur nobis ullam est soluta nam commodi. Sapiente doloremque nihil officia excepturi fuga repellat?
                        </p>
                    </div>
                    <div>
                        <Image
                            width={800}
                            height={600}
                            className="rounded-main mt-3 w-full h-[40vh] object-cover"
                            src="https://images.unsplash.com/photo-1519385091642-02e6b22ed4e2?q=80&w=1676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                    </div>
                </div>
                <div className=" ">
                    <div className="grid grid-cols-2 gap-3 h-full ">
                        {whyUs.map((item, idx) => (
                            <div key={item.title} className={`${idx % 3 === 0 ? "bg-main-3/60" : "bg-sec-1/80"} h-full p-4 rounded-main flex flex-col justify-between gap-3`}>
                                <div className="flex items-center mb-5">
                                    <div className="text-lg p-3 flex items-center justify-center bg-white dark:bg-sec-2/20 rounded-full">
                                        <span className={`${idx % 3 === 0 ? "text-main-1" : "text-sec-1"} brightness-80 `}>
                                            {item.icon}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-xl">{item.title}</h3>
                                    <p className="text-sm text-justify text-neutral-600 dark:text-neutral-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}