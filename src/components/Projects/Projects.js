import React from 'react';
import { SectionHead } from '../common/SectionHead/SectionHead.js';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

export const Projects = () => {
    return(
        <div className="projects section container" id="projects">
            <SectionHead sectionLabel="Projects" />
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Spectrum Residential</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Spectrum Business</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>AT&T</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Abilene Christian University</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Coast CRM</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemTitle>
                            <h4>Fresh Image Center of Dallas</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
        </div>
    )
}   