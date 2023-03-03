import { Button } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DataList from "./DataList";

export default {
    title: "data-display/DataList",
    component: DataList,
    argTypes: {},
} as ComponentMeta<typeof DataList>;

const Template: ComponentStory<typeof DataList> = (args) => {
    return (
        <DataList
            header={
                <div>
                    Data: 03/02/2023
                    <br />
                    Limpeza simples
                </div>
            }
            body={
                <div>
                    Cidade: Sao Paulo <br />
                    Numero de comodos
                </div>
            }
            actions={
                <>
                    <Button variant={"contained"}>Se candidatar</Button>
                </>
            }
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
