import React from "react";
import SlantDividerDown from "../miscellaneous/SlantDividerDown";
import SlantedBanner from "../miscellaneous/SlantedBanner";
import LeftSliceContent from "./LeftSliceContent";
import Footer from "../footer/Footer";
import "./Projects.css";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const Projects = () => {
    return (
        <div className="encompass-projects">
            <div className="projects-container">
                <SlantedBanner heading={"/projects"} />
                <div className="top-divider-banner">
                    <Slide top>
                        <SlantDividerDown />
                    </Slide>
                </div>
                <div className="project1-display">
                    <Fade left delay={200}>
                        <LeftSliceContent
                            headingtext={"BDA-Explorer"}
                            languages={[
                                "Ruby on Rails",
                                "HTML",
                                "CSS",
                                "Bootstrap",
                            ]}
                            imageurl={"https://i.imgur.com/NYXCgK2.png"}
                            codelink={
                                "https://github.com/osu-cascades/bda-explorer"
                            }
                            livelink={"https://bda-explorer.herokuapp.com/"}
                            livelinkenabled={true}
                            popupheading={"BDA-Explorer"}
                            popuptext={[
                                "[Fall 2021-Summer 2022]",
                                "The BDA-Explorer is a web based application used by people all over the country to document Low-Tech, Process-Based Riverscape Restoration projects",
                                "This project represents my Senior Year Capstone Project at OSU-Cascades, which had a strong emphasis on developing professional development skills, not only in coding, but the processes that a professional environment requires",
                                "I worked in a team environment on this Ruby on Rails Project, collaborating in an effective and efficient manor to deliver value to our professional client",
                                "My role within this project was to expand usability and functionality, which entailed many MVC expansions, UI additions/changes, backend Geospatial analysis, security fixes, and general platform maintenence",
                                "The duration of my time on this project was 9 months, in which I went from no knowledge of Rails, to being proficient",
                            ]}
                        />
                    </Fade>
                </div>
                <div className="project2-display">
                    <Fade left delay={400}>
                        <LeftSliceContent
                            headingtext={"Forging Brains"}
                            languages={[
                                "React.js",
                                "HTML",
                                "Firebase",
                                "Shopify",
                                "CSS",
                                "JavaScript",
                            ]}
                            imageurl={"https://i.imgur.com/eipnFic.png"}
                            livelink={"https://www.forgingbrains.com/"}
                            livelinkenabled={true}
                            popupheading={"Forging Brains"}
                            popuptext={[
                                "[Spring 2023-Present]",
                                "Forging brains is a web based application for a podcast concerning topics of farriery and blacksmithing that also hosts a variety of interesting guests",
                                "The Forging Brains website serves as a hub for communication, a shop, information, and a place to listen to the podcast, while providing a professional web presence",
                                "My role within this project as the sole developer was to create an aesthetically pleasing and functional website to provide podcast functionality and general information about the podcast",
                                "The duration of my time on this project has been variable, between the initial creation, and maintenence of the website as more feature requests come in from the podcast hosts",
                            ]}
                        />
                    </Fade>
                </div>
                <div className="project3-display">
                    <Fade left delay={600}>
                        <LeftSliceContent
                            headingtext={"Vava Grounds"}
                            languages={[
                                "React.js ",
                                "HTML",
                                "CSS",
                                "JavaScript",
                            ]}
                            imageurl={"https://i.imgur.com/p1xhPqn.png"}
                            codelink={
                                "https://github.com/cooperphyz/CoffeeShopProject"
                            }
                            livelink={" "}
                            livelinkenabled={false}
                            popupheading={"Vava Grounds"}
                            popuptext={[
                                "[Summer 2021-Fall 2021]",
                                "Vava grounds represents a coffee-shop website made for an aspiring future cafe owner",
                                "I constructed and designed this website in my own personal time over the course of summer at the beheast of a personal client who regularly provided feedback, in which I would incorporate into the website",
                                "My role within this project as the sole developer was to create an aesthetically pleasing and functional website to provide menu functionality and general cafe information about the establishment",
                                "The duration of my time on this project so far has been 2 months",
                            ]}
                        />
                    </Fade>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Projects;
