import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react'

import {
  SectionContainer,
  ContainerStyled,
  SectionTitle,
  SectionDescription,
  SectionButton,
  SectionPictureContainer,
  BottomButton
} from './_presentation.style';

import HouseKeeper from '../../../assets/img/home/housekeeper.png';
import Janitor from '../../../assets/img/home/janitor.png';

function Presentation() {
  const [cleanerPicture, setCleanerPicture] = useState('')

  useEffect(() => {
    setCleanerPicture(Math.random() < 0.5 ? HouseKeeper : Janitor);
  }, []);

  return (
    <SectionContainer>
      <ContainerStyled>
        <SectionTitle sx={{mb: 2}}>
          Encontre agora mesmo um(a) <span>diarista</span>
          <i className='twf-search' />
        </SectionTitle>

        <SectionDescription sx={{mb: 2}}>
          Sao mais de 5.000 profissionais esperando por voce!
        </SectionDescription>

        <SectionButton 
          href={'/encontrar-diarista'}
          mui={{variant:"contained"}}
        >
          Encontrar um(a) diarista
        </SectionButton>

        <SectionPictureContainer>
          <img src={cleanerPicture} />
        </SectionPictureContainer>
      </ContainerStyled>

      <BottomButton>
        <i className={'twf-caret-down'} />
      </BottomButton>
    </SectionContainer>
  )
}

export default Presentation;