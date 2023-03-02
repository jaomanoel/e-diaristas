import { Container } from '@mui/system';
import React from 'react';
import TextFieldMask from '../../components/inputs/TextFieldMask/TextFieldMask';

import PageTitle from '../../components/data-display/PageTitle/PageTitle';
import SafeEnvironment from '../../components/feedback/SafeEnvironment/SafeEnvironment';
import useCheckProfessionals from '../../../data/hooks/pages/useCheckProfessionals.page';

import {
  FormContainer,
  ContainerPaper,
  ContainerContentPaper
} from './_check-professionals.style';
import { Button, Typography, CircularProgress } from '@mui/material';
import UserInformation from '../../components/data-display/UserInformation/UserInformation';

const CheckProfessionals: React.FC = () => {
  const {
    cep,
    setCep,
    validCep,
    findProfessionals,
    error,
    diaristas,
    search,
    loading,
    remainderDiarista
  } = useCheckProfessionals();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle title={'Conheça os profissionais'} subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'} />
      <Container sx={{ mb: 10 }}>
        <FormContainer sx={{ width: '100%' }}>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            fullWidth
          />
          {error.length > 0 && (
            <Typography color={'error'}>{error}</Typography>
          )}

          <Button variant={'contained'} color={'secondary'} sx={{ width: '220px' }} disabled={!validCep || loading} onClick={() => findProfessionals(cep)}>
            {loading ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormContainer>

        {search && (diaristas.length > 0 ? (
          <ContainerPaper>
            <ContainerContentPaper>
              {diaristas.map((diarista, index) => (
                <UserInformation 
                  key={index}
                  name={diarista.name}
                  picture={diarista.picture || ""}
                  rating={diarista.reputation || 0}
                  description={diarista.city}
                />
              ))}
            </ContainerContentPaper>

            <Container sx={{ textAlign: 'center' }}>
              {remainderDiarista > 0 && (
                <Typography variant={'body2'} color={'textSecondary'} sx={{ mt: 5 }}>
                  ...e mais {remainderDiarista} {remainderDiarista > 1 ? "profissionais atendem" : "profissional atende" }ao seu endereço
                </Typography>
              )}
              <Button variant={'contained'} color={'secondary'} sx={{ mt: 5 }}>Contratar um(a) profissional</Button>
            </Container>
          </ContainerPaper>
        ) : (
          <Typography align={'center'} color={'textPrimary'}>
            Ainda não temos nenhuma(a) diarista disponivel em sua região
            </Typography>
        ))}
      </Container>
    </div>
  );
}

export default CheckProfessionals;