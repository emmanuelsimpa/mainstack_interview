import { Dispatch, SetStateAction } from "react";

export type tableProps = {
  data: {
    id: string;
    date: string;
    data: {
      id: string;
      bank: string;
      amount: number;
      note: string;
    }[];
  }[];
};

export interface IProps {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>> | any;
  children: React.ReactNode;
}

export type TabTypes = { name: string; show: React.ReactNode } | any;

interface StepsList {
  id: string;
  name?: string;
  description?: string;
  href?: string;
  status?: string;
}

export interface UserWizardProps {
  content?: React.ReactNode;
  steps: Array<StepsList>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSwitch: Function;
}
