import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IconType } from "react-icons/lib";

export type Menu_Item = {
    route: string;
    text: string;
    icon: IconDefinition | IconType;
    menu?: Array<{ route: string; text: string; icon: IconDefinition | IconType }>;
};