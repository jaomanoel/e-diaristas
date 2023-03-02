import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
    title: 'surface/Footer',
    component: Footer
}as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
    <Footer />
)

export const Default = Template.bind({});
Default.args = {};
