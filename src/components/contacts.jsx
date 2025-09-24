import { FiPhone, FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare, FiClock, FiArrowRight, FiAlertCircle } from 'react-icons/fi';


export const Contact = () => {
    const contactInfo = [
        {
            icon: FiPhone,
            label: "Phone",
            value: "+62 812 9777 0201",
            href: "tel:+6281297770201",
            color: "text-main-1"
        },
        {
            icon: FiMail,
            label: "Email",
            value: "support@peopleimpact.co.id",
            href: "mailto:support@peopleimpact.co.id",
            color: "text-main-3"
        },
        {
            icon: FiMapPin,
            label: "Address",
            value: "PT People Impact Consulting\nEpicentrum Walk, Lt. 3 A306\nJl. HR. Rasuna Said, Kuningan\nJakarta Selatan 12940",
            href: "https://maps.google.com/?q=Epicentrum Walk Jakarta",
            color: "text-sec-3"
        }
    ];
    return (
        <section className="margin">
            <div className='grid grid-cols-4 gap-3 mb-3'>
                {contactInfo.map((el, idx) => {
                    const IconComponent = el.icon;
                    return (
                        <a key={idx} href="">
                            <div className='h-full p-4 bg-main-3 text-darkColor rounded-main flex items-start justify-between'>
                                <div className='flex flex-col'>
                                    <p className='text-xs uppercase font-bold mb-2'>
                                        {el.label}
                                    </p>
                                    <h1 className='line-clamp-2'>
                                        {el.value}
                                    </h1>
                                </div>
                                <div className='ml-10 bg-white p-2 rounded-full text-xl'>
                                    <IconComponent />
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
            <div className="rounded-main overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.264754392871!2d106.83070!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f39c9c2c2c2c%3A0x2c2c2c2c2c2c2c2c!2sEpicentrum%20Walk!5e0!3m2!1sen!2sid!4v1635000000000!5m2!1sen!2sid"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className=""
                    title="People Impact Office Location"
                ></iframe>
            </div>
        </section>
    )
}