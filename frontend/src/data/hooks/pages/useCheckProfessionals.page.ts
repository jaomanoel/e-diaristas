import axios from "axios";
import { useState, useMemo } from "react";
import { UserShotInformationInterface } from "../../@types/userInterface";
import { ApiService } from "../../services/ApiService";
import { ValidationService } from "../../services/ValidationService";



export default function useCheckProfessionals(){
    const [cep, setCep] = useState<string>(""), 
          validCep = useMemo(() => {
            return ValidationService.cep(cep);
          }, [cep]),
          [error, setError] = useState<string>(""),
          [search, setSearch] = useState<boolean>(false),
          [loading, setLoading] = useState<boolean>(false),
          [diaristas, setDiaristas] = useState<UserShotInformationInterface[]>([]),
          [remainderDiarista, setRemainderDiarista] = useState<number>(0);

    async function findProfessionals(cep: string) {
        setSearch(false);
        setLoading(true);
        setError("");

        try{
            const response = await ApiService.get<{
                diaristas: UserShotInformationInterface[];
                amount_diaristas: number;
            }>(`/api/diaristas/locality?cep=${cep.replace(/\D/g, "")}`)
            
            setDiaristas(response.data.diaristas);
            setRemainderDiarista(response.data.amount_diaristas)
            setSearch(true)
            setLoading(false)
        }catch(error){
            setError("CEP não encontrado!");
            setLoading(false);
        }
    }

    return {
        cep,
        setCep,
        validCep,
        findProfessionals,
        error,
        diaristas,
        search,
        loading,
        remainderDiarista
    };
}