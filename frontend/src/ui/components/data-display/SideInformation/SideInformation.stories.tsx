import { ComponentMeta, ComponentStory } from "@storybook/react";
import SideInformation from "./SideInformation";

export default {
    title: "data-display/SideInformation",
    component: SideInformation,
    argTypes: {},
} as ComponentMeta<typeof SideInformation>;

const Template: ComponentStory<typeof SideInformation> = (args) => {
    return <SideInformation {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    title: "Detalhes",
    items: [
        {
            title: "Tipo",
            description: ["Limpeza de rotina"],
            icon: "twf-check-circle",
        },
        {
            title: "Tamanho",
            description: ["3 cômodos", "2 banheiros"],
            icon: "twf-check-circle",
        },
        {
            title: "Data",
            description: ["02/03/22023"],
            icon: "twf-check-circle",
        },
    ],
    footer: {
        title: "R$185,00",
        icon: "twf-credit-card",
    },
};

export const NoIconNoFooter = Template.bind({});
NoIconNoFooter.args = {
    title: "Como funciona",
    items: [
        {
            title: "1 - Cadastro",
            description: ["Voê faz o cadastro e escolhe as cidades atendidas"],
        },
        {
            title: "2 - Receba Propostas",
            description: [
                "Voê recebeá serviços por email e notificação no celular",
            ],
        },
        {
            title: "3 - Diária Agendada",
            description: [
                "Se o seu perfil for escolhido pelo cliente você recebeá a confirmação do agendamento",
            ],
        },
    ],
};
