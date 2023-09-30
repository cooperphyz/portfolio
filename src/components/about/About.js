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
    SiPostgresql,
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
                            I've been able to cultivate my professional skills through a variety of different means,
                            both inside and outside of school.
                        </p>
                        <p>
                            As it pertains to Software Development from a purely technical aspect, I have taken a
                            multitude of high-quality courses through my time at OSU-Cascades and Central Oregon
                            Community College that have fostered an incredible foundation for myself to be able to
                            quickly adopt new skills and technologies with. I discovered that I had a passion for web
                            application development early on with my initial exposure to React, and as such took courses
                            pertaining to that path where I could.
                        </p>
                        <p>
                            From the standpoint of being able to perform in a professional environment, OSU-Cascades and
                            my multi-year personal work experience as a Manager for a department in a retail store have
                            geared me much towards success. OSU-Cascades provides much more than just teaching students
                            how to code, they teach students how to operate within a professional environment. Customer
                            service, working with professional clients, and teamwork, are among the skills that both of
                            the aforementioned institutions have instilled in me.
                        </p>
                        <p>
                            I have found myself able to learn new languages, frameworks, and paradigms rather quickly.
                            I've been able to go from knowing nothing about a framework/language, to being decently
                            fluent in only a few week time period, even whilst taking full course loads alongside it.
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
