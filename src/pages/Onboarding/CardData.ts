import { Slugs } from "./Onboarding";

type CardDataItem = {
  image: string;
  title: string;
  body: string;
  button: string;
  slug: Slugs;
};

export const CardData: CardDataItem[] = [
  {
    image: "/tracking.png",
    title: "Tracking Expenses",
    body: "Your money needs a plan. Use Budgit to track how and where money goes in and out of your accounts.",
    button: "Track Expenses",
    slug: "tracking",
  },
  {
    image: "/churning.png",
    title: "Tracking Churn",
    body: "Oh what a beautiful sport churning is.",
    button: "Track Churning",
    slug: "churning",
  },
  {
    image: "/retirement.png",
    title: "Tracking Retirement",
    body: "How close are YOU to your magic number?",
    button: "Track Retirement",
    slug: "retirement",
  },
];
