import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}
export interface FoodType {
  id: number;
  image: string;
  name: string;
  price: string;
  description: string;
  available: boolean;
}

export interface inputProps {
  name: string,
  placeholder?: string,
  icon?: React.ComponentType<IconBaseProps>,
}

export type FoodDataType = Omit<FoodType, "id" | "available">;

