import { ComponentMeta, ComponentStory } from "@storybook/react";
import RoundedButton from "ui/components/inputs/RoundedButton/RoundedButton";

import Link from "./Link";

export default{
    title: 'navigations/Link',
    component: Link
} as ComponentMeta<typeof Link>


const Template: ComponentStory<typeof Link> = (args) => (
    <Link {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: "Click aqui",
    href: "/#",
}

    