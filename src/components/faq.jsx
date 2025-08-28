import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaQ } from "react-icons/fa6"
import { Title } from "./title"

export const FaqComponent = () => {
    const FAQ = [
        {
            question: "Apa saja layanan yang termasuk dalam jasa pembuatan website?",
            answer: "Kami menyediakan layanan lengkap mulai dari desain dan pengembangan website, pembuatan konten, Optimasi SEO, integrasi media sosial, hingga pemeliharaan dan dukungan teknis."
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk membuat sebuah website?",
            answer: "Waktu pembuatan website tergantung pada kompleksitas dan kebutuhan spesifik Anda. Secara umum, proses pembuatan bisa memakan waktu antara 1 sampai 8 minggu."
        },
        {
            question: "Apakah saya perlu menyediakan konten untuk website?",
            answer: "Anda bisa menyediakan konten sendiri atau menggunakan layanan pembuatan konten dari kami. Kami dapat membantu membuat teks, gambar, dan artikel yang relevan dan menarik untuk website Anda."
        },
        {
            question: "Apakah website saya bisa mobile-friendly?",
            answer: "Ya, semua website yang kami buat memiliki desain responsif, yang berarti akan terlihat dan berfungsi dengan baik di perangkat apa pun, termasuk komputer, tablet, dan smartphone."
        },
        {
            question: "Apakah saya bisa meng-update website sendiri setelah selesai dibuat?",
            answer: "Tentu saja! Kami menggunakan Content Management System (CMS) seperti WordPress yang memungkinkan Anda untuk dengan mudah mengupdate konten, gambar, dan halaman tanpa memerlukan pengetahuan teknis."
        },
    ]

    return (
        <section className="margin">
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col justify-between">
                    <div>
                        <Title>
                            Frequently Asked <br /> Questions
                        </Title>
                        <p className="max-w-70 text-neutral-500 dark:text-neutral-300 mt-5">
                            Contact Us if you have any other questions or need further assistance.
                        </p>
                    </div>
                    <div className="flex items-end gap-2">
                        <div className="w-50 h-50 bg-main-1 rounded-main flex items-center justify-center"></div>
                        <div className="w-40 h-40 bg-sec-4 rounded-main flex items-center justify-center"></div>
                        <div className="w-30 h-30 bg-sec-1 rounded-main flex items-center justify-center"></div>
                    </div>
                </div>
                <div>
                    <Accordion collapsible>
                        {FAQ.map((el, idx) => (
                            <AccordionItem key={idx} value={idx.toString()} className={"!border-neutral-500 dark:border-neutral-400"}>
                                <AccordionTrigger >
                                    <div className="py-5 flex items-center gap-3 text-lg">
                                        <p className="mr-5">
                                            0{idx + 1}
                                        </p>
                                        {el.question}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className={"ml-13.5 text-neutral-500 dark:text-neutral-300"}>
                                    {el.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}