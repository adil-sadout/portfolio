import "../assets/css/about.css"

import { CodeSlash, CodeSquare, Gear, FileEarmarkBreak } from 'react-bootstrap-icons';

export default function About() {
    return (
        <section id="about">
            <div className="header d-flex flex-row align-items-center">
                <div className="header-title">ABOUT ME</div>
                <div className="header-line"></div>
            </div>
            <div className="about-me">
            <br />
            Hi, I'm Adil Sadout 😄, a Web Developer and IT Technician, I am passionate about creating efficient and user-friendly web applications while providing top-notch technical support. With a focus on building robust web interfaces and handling backend functionalities, I am dedicated to delivering high-quality solutions that meet both user experience and technical needs.
            <br />
            <br />
            In addition to my development expertise, I have a background in technical support, having worked for companies like Hostinger, FTX, and Binance. This experience has given me a deep understanding of client expectations and effective communication. I'm excited to bring my technical know-how and client-focused approach to your next project. Let's discuss how I can contribute to your success! 💻🌐
            </div>

            <div className="header2">
                <div className="header-title">What I do!</div>
            </div>
            <div className="services d-flex justify-content-center align-content-start flex-wrap">
                <div className="service" style={{ backgroundColor: "#FFEBD0" }}>
                    <div className="service-header d-flex justify-content-center align-items-center">
                        <div className="service-icon">
                            <CodeSlash fill="red" />
                        </div>
                        <div className="service-title">
                            Front-End Development
                        </div>
                    </div>
                    <div className="service-content">
                        Bringing your digital ideas to life, I specialize in creating dynamic and responsive user interfaces using leading technologies like React, Material UI, and Bootstrap. Whether it's crafting seamless navigation or ensuring a visually stunning experience across devices, I focus on delivering front-end solutions that resonate with users and drive engagement.
                    </div>
                </div>

                <div className="service" style={{ backgroundColor: "#F2F7FC" }}>
                    <div className="service-header d-flex justify-content-center align-items-center">
                        <div className="service-icon">
                            <Gear fill="blue" />
                        </div>
                        <div className="service-title">
                            UI/UX Enhancement
                        </div>
                    </div>
                    <div className="service-content">
                        I prioritize user experience by crafting interfaces that are not only visually appealing but also intuitive and accessible. Leveraging my experience in front-end technologies, I work to enhance UI/UX by creating interactive and user-friendly designs that align with the latest industry standards and user expectations.
                    </div>
                </div>

                <div className="service" style={{ backgroundColor: "#F2F7FC" }}>
                    <div className="service-header d-flex justify-content-center align-items-center">
                        <div className="service-icon">
                            <CodeSquare fill="#06C6A6" />
                        </div>
                        <div className="service-title">
                            Web Performance Optimization
                        </div>
                    </div>
                    <div className="service-content">
                        Speed and performance are key to a successful web presence. I focus on optimizing web applications to ensure fast load times and smooth interactions. By implementing best practices and leveraging tools like Git for version control and Node.js for efficient server-side scripting, I help your site perform at its best, providing a seamless experience for your users.
                    </div>
                </div>

                <div className="service" style={{ backgroundColor: "#FFEBD0" }}>
                    <div className="service-header d-flex justify-content-center align-items-center">
                        <div className="service-icon">
                            <FileEarmarkBreak fill="#77A5CD" />
                        </div>
                        <div className="service-title">
                            Technical Support
                        </div>
                    </div>
                    <div className="service-content">
                        Ensuring smooth operations, I bring my expertise in technical support to resolve issues efficiently and keep systems running optimally. With experience at companies like Hostinger, FTX, and Binance, I’ve honed my skills in troubleshooting, customer service, and technical problem-solving to provide clients with reliable and effective solutions.
                    </div>
                </div>

            </div>
        </section>
    );
}