import React from 'react';
import './About.css';
import Footer from '../footer/Footer';
import ParagraphContentPanel from '../miscellaneous/ParagraphContentPanel';
import SlantDividerDown from '../miscellaneous/SlantDividerDown';
import SlantedBanner from '../miscellaneous/SlantedBanner';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import {
    SiRubyonrails,
    SiCss3,
    SiHtml5,
    SiPython,
    SiJavascript,
    SiGithub,
    SiSqlite,
    SiBootstrap,
    SiTypescript
} from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';

import { BiLogoJava } from 'react-icons/bi';

const About = () => {
    return (
        <div className="encompass-about">
            <div className="about-container">
                <SlantedBanner heading={'/about'} />
                <div className="top-divider-banner">
                    <Slide top>
                        <SlantDividerDown />
                    </Slide>
                </div>
                <div className="about-content">
                    <ParagraphContentPanel parheader={'About Me'}>
                        <p>
                            I am currently Software Engineer with a strong foundation in Computer Science, holding a
                            Bachelor's degree from Oregon State University, Cascades. Throughout my academic and
                            professional journey, I've been on an exciting path that's taken me from diverse roles,
                            including farming, landscaping, and volunteer work, to my current position as a Software
                            Engineer.
                        </p>
                        <p>
                            My relentless dedication and a reputation for hard work have been consistent attributes that
                            have earned recognition from my employers. As a recent graduate, I've transitioned into the
                            role of a Software Engineer, where I've had the opportunity to apply my skills in web
                            application development and beyond.
                        </p>
                        <p>
                            At OSU Cascades, I developed a versatile skill set, including expertise in technologies like
                            TypeScript, React, Python, SQL, Docker, and more. I thrive in collaborative team
                            environments, where I focus on delivering efficient and effective solutions to complex
                            problems.
                        </p>
                        <hr></hr>
                        <Fade left cascade>
                            <div className="about-iconlist">
                                <SiRubyonrails className="about-icon" />
                                <RiReactjsFill className="about-icon" />
                                <SiCss3 className="about-icon" />
                                <SiHtml5 className="about-icon" />
                                <SiPython className="about-icon" />
                                <SiJavascript className="about-icon" />
                                <SiTypescript className="about-icon" />
                                <SiGithub className="about-icon" />
                                <BiLogoJava className="about-icon" />
                                <SiSqlite className="about-icon" />
                                <SiBootstrap className="about-icon" />
                            </div>
                        </Fade>
                    </ParagraphContentPanel>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default About;
