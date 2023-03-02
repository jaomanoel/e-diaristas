import { ComponentMeta, ComponentStory } from "@storybook/react";

import Card from "./Card";

export default {
    title: 'partials/Card',
    component: Card
}as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
)

export const Default = Template.bind({});
Default.args = {
    title: 'teste Primary',
    desc: 'teste Secundary',
    img: 'rqadaw'
};