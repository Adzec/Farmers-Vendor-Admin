import { IconType } from 'react-icons'; 

export interface CardProps {
    title?: string;
    text?: string;
    amount?: string;
    url?: string;
    icon?: IconType;
    color?: string;
}


export interface UserProps{
    email?: string;
    password?:string
}
