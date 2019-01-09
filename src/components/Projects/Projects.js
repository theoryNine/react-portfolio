import React from 'react';
import { SectionHead } from '../common/SectionHead/SectionHead.js';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';
import SpecResi1 from '../../assets/images/spec_resi_1.png';
import SpecResi2 from '../../assets/images/spec_resi_2.png';
import SpecResi3 from '../../assets/images/spec_resi_3.png';
import SpecResi4 from '../../assets/images/spec_resi_4.png';
import SpecBiz1 from '../../assets/images/spec_biz_1.png';
import SpecBiz2 from '../../assets/images/spec_biz_2.png';
import Att1 from '../../assets/images/att1.png';
import Att2 from '../../assets/images/att2.png';
import Acu1 from '../../assets/images/acu1.png';
import Acu2 from '../../assets/images/acu2.png';
import Coast1 from '../../assets/images/coast1.png';
import Coast2 from '../../assets/images/coast2.png';
import Fi1 from '../../assets/images/fi1.png';
import Fi2 from '../../assets/images/fi2.png';


export const Projects = () => {
    return(
        <div className="projects section container" id="projects">
            <SectionHead sectionLabel="Projects" />
                <Accordion accordion={false}>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Spectrum Residential</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div className="screenshots">
                                <div className="screenshot">
                                    <a href={SpecResi1} target="_blank" rel="noopener noreferrer">
                                        <img src={SpecResi1} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                                <div className="screenshot">
                                    <a href={SpecResi2} target="_blank" rel="noopener noreferrer">
                                        <img src={SpecResi2} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                                <div className="screenshot">
                                    <a href={SpecResi3} target="_blank" rel="noopener noreferrer">
                                        <img src={SpecResi3} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                                <div className="screenshot">
                                    <a href={SpecResi4} target="_blank" rel="noopener noreferrer">
                                        <img src={SpecResi4} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                            </div>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Spectrum Business</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div className="screenshots">
                                <div className="screenshot">
                                    <a href={SpecBiz1} target="_blank" rel="noopener noreferrer">
                                        <img src={SpecBiz1} alt="Spectrum business homepage screenshot" />
                                    </a>
                                </div>
                                <div className="screenshot">
                                    <a href={SpecBiz2} target="_blank" rel="noopener noreferrer">
                                        <img src={SpecBiz2} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                            </div>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>AT&T</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div className="screenshots">
                                <div className="screenshot">
                                    <a href={Att1} target="_blank" rel="noopener noreferrer">
                                        <img src={Att1} alt="Spectrum business homepage screenshot" />
                                    </a>
                                </div>
                                <div className="screenshot">
                                    <a href={Att2} target="_blank" rel="noopener noreferrer">
                                        <img src={Att2} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                            </div>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Abilene Christian University</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div className="screenshots">
                                <div className="screenshot">
                                    <a href={Acu1} target="_blank" rel="noopener noreferrer">
                                        <img src={Acu1} alt="Spectrum business homepage screenshot" />
                                    </a>
                                </div>
                                <div className="screenshot">
                                    <a href={Acu2} target="_blank" rel="noopener noreferrer">
                                        <img src={Acu2} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                            </div>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Coast CRM</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div className="screenshots">
                                <div className="screenshot">
                                    <a href={Coast1} target="_blank" rel="noopener noreferrer">
                                        <img src={Coast1} alt="Spectrum business homepage screenshot" />
                                    </a>
                                </div>
                                <div className="screenshot">
                                    <a href={Coast2} target="_blank" rel="noopener noreferrer">
                                        <img src={Coast2} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                            </div>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Fresh Image Center of Dallas</h4>
                        </AccordionItemTitle>
                            <AccordionItemBody>
                            <div className="screenshots">
                                <div className="screenshot">
                                    <a href={Fi1} target="_blank" rel="noopener noreferrer">
                                        <img src={Fi1} alt="Spectrum business homepage screenshot" />
                                    </a>
                                </div>
                                <div className="screenshot">
                                    <a href={Fi2} target="_blank" rel="noopener noreferrer">
                                        <img src={Fi2} alt="Spectrum homepage screenshot" />
                                    </a>
                                </div>
                            </div>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
        </div>
    )
}   