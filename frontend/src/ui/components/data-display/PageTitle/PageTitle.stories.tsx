import { ComponentMeta, ComponentStory } from "@storybook/react";
import PageTitle from "./PageTitle";

export default {
    title: "data-display/PageTitle",
    component: PageTitle
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => {
    return <PageTitle {...args} />
}

export const Default = Template.bind({});
Default.args = {
    title: "Conheca os profissionais",
    subtitle: "Preencha seu endereco e veja todos os profissionais da sua localidade"
};