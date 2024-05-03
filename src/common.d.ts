import { IconType } from 'react-icons'; 

export interface CardProps {
    title?: string;
    text?: string;
    amount?: string | number;
    url?: string;
    icon?: IconType;
    color?: string;
}


export interface UserProps{
    email?: string;
    password?:string
}



export interface ProductProp {
    id?: number;
    name?: string;
    price?: number;
    description?: string; // Optional property denoted by '?'
    category?: string;
    inStock?: boolean;
    image?:string
    
}


export interface CategoryProp{
id?:string;
name:string;
totals:number;

}