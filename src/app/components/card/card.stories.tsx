import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Welcome to Your Dashboard",
    description:
      "Get started by exploring the features and tools available to you.",
    buttonLabel: "Get Started",
    onButtonClick: () => console.log("Button clicked"),
  },
};

export const WithLongDescription: Story = {
  args: {
    title: "Project Overview",
    description:
      "This is a comprehensive project management tool designed to help teams collaborate effectively. It includes features like task tracking, team communication, progress monitoring, and detailed analytics to ensure your projects stay on track and meet deadlines.",
    buttonLabel: "View Details",
    onButtonClick: () => console.log("View details clicked"),
  },
};

export const ShortContent: Story = {
  args: {
    title: "Quick Action",
    description: "Complete this task now.",
    buttonLabel: "Continue",
    onButtonClick: () => console.log("Continue clicked"),
  },
};
