import { ComponentMeta, ComponentStory } from "@storybook/react";
import ItemCounter from "./ItemCounter";

export default {
    title: "inputs/ItemCounter",
    component: ItemCounter,
    argTypes: {},
} as ComponentMeta<typeof ItemCounter>;

const Template: ComponentStory<typeof ItemCounter> = (args) => {
    return <ItemCounter {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    label: "cozinha",
    plural: "cozinhas",
    counter: 0,
};
