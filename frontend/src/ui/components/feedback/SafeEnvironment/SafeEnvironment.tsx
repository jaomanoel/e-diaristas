import React from 'react'

import { Container } from '@mui/system';

import { 
    SafeEnvironmentContainer 
} from './SafeEnvironment.style';

function SafeEnvironment() {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Ambiente 100% Seguro <i className={'twf-lock'}></i>
            </Container>
        </SafeEnvironmentContainer>
    )
}

export default SafeEnvironment;