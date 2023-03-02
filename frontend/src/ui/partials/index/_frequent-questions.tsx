import React, { ReactElement, useState } from 'react'

import {
  SectionContainer,
  Wave,
  SectionTitle,
  SectionSubTitle,
  AccordionStyled
} from './_frequent-questions.style';

import { 
  AccordionSummary, 
  AccordionDetails,
  Typography, 
  Container
} from '@mui/material';

import WaveImg from "../../../assets/img/home/waves.svg";

const acctionList = [
    {
        title: 'Dúvida 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus officiis sequi cumque perferendis laudantium est iure, quaerat, tempora minus facere vel molestias optio consequuntur modi deserunt earum culpa nostrum.'
    },
    {
        title: 'Dúvida 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus officiis sequi cumque perferendis laudantium est iure, quaerat, tempora minus facere vel molestias optio consequuntur modi deserunt earum culpa nostrum.'
    },
    {
        title: 'Dúvida 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus officiis sequi cumque perferendis laudantium est iure, quaerat, tempora minus facere vel molestias optio consequuntur modi deserunt earum culpa nostrum.'
    },
    {
        title: 'Dúvida 4',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus officiis sequi cumque perferendis laudantium est iure, quaerat, tempora minus facere vel molestias optio consequuntur modi deserunt earum culpa nostrum.'
    }
]

function FrequentQuestions() {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const isOpen = (accordionNumber: number): boolean => {
        return activeAccordion === accordionNumber;
    }

    const changeOpenAccordion = (accordionNumber: number): void => {
        setActiveAccordion(accordionNumber)

        if(isOpen(accordionNumber)){
            setActiveAccordion(0);
        }
    }

    const getIcon = (accordionNumber: number): string => {
        return isOpen(accordionNumber) ? 'twf-minus' : 'twf-plus';
    }

    return (
        <SectionContainer>
            <Wave src={WaveImg} />
            <Container>
                <SectionTitle>Ainda está com dúvidas?</SectionTitle>
                <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>

                {acctionList.map((question, index) => {
                    return (
                        <AccordionStyled 
                            key={index} 
                            expanded={isOpen(index+1)}
                            onChange={() => changeOpenAccordion(index+1)}
                        >
                            <AccordionSummary 
                                expandIcon={<i className={getIcon(index+1)} />}
                            >
                                <Typography color={'primary'}>
                                    {question.title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                {question.desc}
                            </AccordionDetails>
                        </AccordionStyled>
                    )
                })}
            </Container>
        </SectionContainer>
    )
}

export default FrequentQuestions;