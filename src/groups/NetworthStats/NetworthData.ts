import {
  IconCreditCardPay,
  IconPigMoney,
  IconSeeding,
  IconTarget,
  TablerIconsProps,
} from "@tabler/icons-react";

export type Trend = {
  historically: "higher" | "lower";
  type: "positive" | "negative";
  comparator: string;
  amount: string;
};

export type NetworthDataProps = {
  title: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  amount: string;
  trend: Trend;
  logoColor: string;
};

const NetworthDisplayItems: NetworthDataProps[] = [
  {
    title: "Net Worth",
    icon: IconTarget,
    amount: "74800.02",
    logoColor: "red",
    trend: {
      historically: "higher",
      type: "positive",
      comparator: "compared to exactly one year ago today",
      amount: "23%",
    },
  },
  {
    title: "Saved This Month",
    icon: IconSeeding,
    amount: "2141.15",
    logoColor: "teal",
    trend: {
      historically: "lower",
      type: "negative",
      comparator: "compared to last month to date",
      amount: "- 40%",
    },
  },
  {
    title: "Saved Year To Date",
    icon: IconPigMoney,
    amount: "4856.23",
    logoColor: "orange",
    trend: {
      historically: "higher",
      type: "positive",
      comparator: "compared to last year to date",
      amount: "20%",
    },
  },
  {
    title: "Debt",
    icon: IconCreditCardPay,
    amount: "3220.01",
    logoColor: "pink",
    trend: {
      historically: "lower",
      type: "positive",
      comparator: "compared to last month",
      amount: "- 4%",
    },
  },
];

export default NetworthDisplayItems;
