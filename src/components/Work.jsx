import { Image } from "react-bootstrap";
import "../assets/css/work.css";

import chatroot from "../assets/images/works/chatroom.png";
import nmbrgoup from "../assets/images/works/nmbrgoup.png";
import myboxingdz from "../assets/images/works/myboxingdz.png";
import brokers from "../assets/images/works/brokers.png";
import blogsite from "../assets/images/works/blogsite.png";
import bettercoffee from "../assets/images/works/bettercoffee.png";
import adminpanel from "../assets/images/works/adminpanel.png";
import todo from "../assets/images/works/todo_javascript_project.png";

export default function Work() {
    return (
        <section>
            <div className="header d-flex flex-row align-items-center">
                <div className="header-title">Work</div>
                <div className="header-line"></div>
            </div>

            <div className="works-wraper d-flex align-content-start justify-content-center flex-wrap">
                <div className="work-box">
                    <Image src={nmbrgoup} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">
                            <a href="https://numbr-go-up.netlify.app/" rel="noreferrer" target="_blank" >
                                NumbrGoUp NFT Project
                            </a>
                        </div>
                    </div>
                </div>

                <div className="work-box">
                    <Image src={adminpanel} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">
                            <a href="https://66d4e1b528b5bb0008289dcc--admin1235-dashboard.netlify.app/" rel="noreferrer" target="_blank" >
                                Admin Dashboard Panel
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="work-box">
                    <Image src={brokers} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">
                            <a href="https://thebrokers.netlify.app/" rel="noreferrer" target="_blank" >
                                The Brokers Club
                            </a>
                        </div>
                    </div>
                </div>

                <div className="work-box">
                    <Image src={myboxingdz} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">
                            <a href="https://myboxingdz.com/" rel="noreferrer" target="_blank" >
                                MyBoxingDz E-commerce Website
                            </a>
                        </div>
                    </div>
                </div>

                <div className="work-box">
                    <Image src={chatroot} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">
                            <a href="https://simple-chat-room.netlify.app/" rel="noreferrer" target="_blank" >
                                Online Chat Room
                            </a>
                        </div>
                    </div>
                </div>
                <div className="work-box">
                    <Image src={bettercoffee} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">
                            <a href="https://bettercoffeereact.netlify.app/" rel="noreferrer" target="_blank" >
                                BetterCoffee E-commerce Site
                            </a>
                        </div>
                    </div>
                </div>
                
                

                <div className="work-box">
                    <Image src={todo} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">
                            <a href="https://main--todoapp1265165345.netlify.app/" rel="noreferrer" target="_blank" >
                                Todo ReactJS Project
                            </a>
                        </div>
                    </div>
                </div> 
                
                <div className="work-box">
                    <Image src={blogsite} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">
                            <a href="https://simple-react-blog-site.netlify.app/" rel="noreferrer" target="_blank" >
                                The Blogger Website
                            </a>
                        </div>
                    </div>
                </div>
                
                

                
            </div>

        </section>
    );
}