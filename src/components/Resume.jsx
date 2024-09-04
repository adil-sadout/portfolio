import "../assets/css/resume.css";
import { Mortarboard, Briefcase } from 'react-bootstrap-icons';

export default function Resume() {
    return (
        <>
            <section>
                <div className="header d-flex flex-row align-items-center">
                    <div className="header-title">Resume</div>
                    <div className="header-line"></div>
                </div>

                <div className="resume-wraper d-flex justify-content-between">
                    <div className="education">
                        <div className="header d-flex align-items-center">
                            <Mortarboard fill="url(#icon-gradiant)" />
                            <div className="title">Education</div>
                        </div>

                        <div className="detail-box">
                            <div className="time-duration">2017-2020</div>
                            <div className="title">Computer Science and Engineering</div>
                            <div className="school-or-clg">Djilali Bounaama University</div>
                        </div>

                    </div>
                    <div className="experience">
                        <div className="header d-flex align-items-center">
                            <Briefcase fill="url(#icon-gradiant)" />
                            <div className="title">Experience</div>
                        </div>

                        

                        <div className="detail-box" style={{ backgroundColor: "rgba(255, 227, 191, 0.7)" }}>
                            <div className="time-duration">2021 - Current</div>
                            <div className="title">Full Stack Developer</div>
                            <div className="school-or-clg">Freelance</div>
                        </div>
                        <div className="detail-box">
                            <div className="time-duration">2022-2023</div>
                            <div className="title">P2P Investigation Specialist</div>
                            <div className="school-or-clg">Binance Ltd</div>
                        </div>

                        <div className="detail-box">
                            <div className="time-duration">2020-2021</div>
                            <div className="title">Customer Success Specialist</div>
                            <div className="school-or-clg">Hostinger International</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="skills-wraper d-flex justify-content-between">
                <div className="work-skills">
                    <div className="header">
                        <div className="title">Work Skills</div>
                    </div>

                    <div className="skills d-flex flex-wrap">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JS</div>
                        <div className="skill">ReactJS</div>
                        <div className="skill">Bootstrap</div>
                        <div className="skill">MaterialUI</div>
                        <div className="skill">TailwindCSS</div>
                        <div className="skill">NodeJS</div>
                        <div className="skill">MongoDB</div>
                        <div className="skill">Git</div>
                        <div className="skill">FastAPI</div>
                        <div className="skill">Wordpress</div>
                        <div className="skill">UI/UX</div>
                        <div className="skill">Debugging</div>
                    </div>
                </div>
                <div className="soft-skills">
                    <div className="header">
                        <div className="title">Soft Skills</div>
                    </div>

                    <div className="skills d-flex flex-wrap">
                        <div className="skill">Time management</div>
                        <div className="skill">Interpersonal</div>
                        <div className="skill">Quick learner</div>
                        <div className="skill">Communication</div>
                        <div className="skill">Teamwork</div>
                        <div className="skill">Leadership</div>
                        <div className="skill">Problem solving</div>
                    </div>
                </div>

            </div>
        </>
    );
}