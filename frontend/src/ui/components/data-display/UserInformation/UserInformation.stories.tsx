import { ComponentMeta, ComponentStory} from "@storybook/react";
import UserInformation from "./UserInformation";

export default {
    title: 'data-display/UserInformation',
    component: UserInformation,
    //argTypes: {}
} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => {
    return <UserInformation {...args}/>
}

export const Default = Template.bind({});
Default.args = {
    name: "jao",
    picture: "https://images.unsplash.com/photo-1677526523523-cce38b4b9a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 7.8,
    description: "Adorei continuarei a usar!",
    isRating: true
};