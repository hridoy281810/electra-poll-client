import Aos from "aos";
import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import faqImage from '../../../assets/faq/faq.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Faq.css';

const Faq = () => {

    useEffect(() => {
        Aos.init({
            duration: 800
        })
    }, [])

    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "Is my personal information secure?",
            answer: "Absolutely. ElectraPoll employs state-of-the-art encryption and multi-factor authentication to ensure the security of your personal information. We take privacy seriously and have implemented robust measures to protect your data.",

        },
        {
            id: 2,
            question: "Can I change my vote after submitting?",
            answer: "No, once a vote is submitted, it is considered final. This is to maintain the integrity of the voting process and prevent any unauthorized changes. Make sure to carefully review your choices before casting your vote.",

        },
        {
            id: 3,
            question: "How do I know if my vote has been counted?",
            answer: "After you've submitted your vote, you will receive a confirmation email containing a unique receipt code. This code serves as proof that your vote has been recorded. If you don't receive the confirmation email, please check your spam folder or contact our support team.",

        },
        {
            id: 4,
            question: "What happens if I forget my login credentials?",
            answer: "If you forget your login credentials, you can use the 'Forgot Password' option on the login page. Follow the instructions to reset your password. For security reasons, we don't store your password in plain text, and we use industry-standard practices to protect your account.",

        },
        {
            id: 5,
            question: "Can I vote using a mobile device?",
            answer: "Yes, ElectraPoll is optimized for mobile devices. You can access the platform and cast your vote using any modern smartphone or tablet with internet access. The user interface is designed to be user-friendly and responsive on various screen sizes.",

        },
        {
            id: 6,
            question: "How can I verify the authenticity of the election results?",
            answer: "We believe in transparency. Once the voting process is completed, we will publish detailed election results on our website. These results will be auditable and verifiable, ensuring the accuracy and fairness of the election.",

        },
    ]);


    return (
        <div data-aos="fade-up" className='my-container'>
            <SectionTitle title={"Frequently Asked Questions"}
                subTitle={"Your Questions, Our Answers"}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10  gap-6 items-center'>
                <Accordion className="order-2" allowZeroExpanded>
                    {faqs.map((item) => (
                        <AccordionItem key={item.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {item.question}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {item.answer}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div data-aos="fade-right" data-aos-duration="800" className=' md:ps-20 order-1'>
                    <img src={faqImage} alt="faq image" />
                </div>
            </div>



        </div>
    );
};

export default Faq;
