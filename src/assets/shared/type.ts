

export enum SelectedPage {
Home = "home",
ContactUs ="contacus",
Benefits = "benefits",
OurClasses = "ourclasses"
}
 
export interface BenefitType{
    icon:JSX.Element;
    title:string;
    description:string
}