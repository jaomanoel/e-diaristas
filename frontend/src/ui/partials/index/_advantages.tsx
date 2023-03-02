import React from 'react'

import { 
  GradientBackground,
  SectionTitle,
  ListStyled,
  ListDivider
} from './_advantages.style';

import Card from '../../../ui/components/partials/Card/Card';

import { ListItem, Container } from '@mui/material';

const advantageList =  [
    {
        icon: 'twf-woman',
        title: 'Diversidade',
        desc: 'São mais de 5.000 profissionais esperando por você!'
    },
    {
        icon: 'twf-certificate',
        title: 'Confiabilidade',
        desc: 'Todos os profissionais são verificados'
    },
    {
        icon: 'twf-search-2',
        title: 'Rastreabilidade',
        desc: 'Voce pode acessar todo o histórico do(a) profissional'
    },
    {
        icon: 'twf-frame-broken',
        title: 'Seguranca',
        desc: 'Seguro sobre qualquer possível dano'
    },
    {
        icon: 'twf-payment',
        title: 'Controle',
        desc: 'O pagamento é realizado somente quando o(a) profissional está na sua casa'
    },
    {
        icon: 'twf-broom-bucket',
        title: 'Experiências',
        desc: 'Mais de 50.000 diárias realizadas'
    },
]

function Advantages() {
    return (
        <GradientBackground>
            <Container>
                <SectionTitle>Por que usar o E-diaristas?</SectionTitle>
                <ListStyled>

                    {advantageList.map((card, index) => {
                        return (
                            <React.Fragment key={card.icon}>
                                <ListItem disableGutters>
                                    <Card 
                                        title={card.title} 
                                        desc={card.desc} 
                                        img={card.icon} />
                                </ListItem> 

                                {index < 5 && (<ListDivider />)}
                            </React.Fragment>
                        )
                    })}
                </ListStyled>
            </Container>
        </GradientBackground>
    )
}

export default Advantages;