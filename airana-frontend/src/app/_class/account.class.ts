import { Role } from "./role.class";
export class Account {
    id: string;
    username: string;
    name: string;
    surname: string;
    email: any;
    password: string;
    birthdate: any;
    rememberme: boolean;
    roles: Role;
    theme: string;
    accessToken?: string;
    //origin: any;
    // website: any;
    // sex: any;
    // notes: any;
    // adress: any;
    // telephone: any;
    // display: any;
    //signup: any;
}