/*
 * @Author: ryyyyy
 * @Date: 2021-12-08 16:32:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-08 16:35:29
 * @Description: Do not edit
 * @FilePath: /temp-react-library/src/components/Button/button.stories.tsx
 */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  children: "Click me!",
};