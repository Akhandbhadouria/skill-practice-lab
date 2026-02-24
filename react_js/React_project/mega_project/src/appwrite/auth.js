import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();  //client: Creates a new Appwrite client instance.
    account;
    constructor(){
        this.client.setEndpoint(config.appwrite_url).setProject(config.appwrite_project_id);  //Without setting the project ID, Appwrite would reject requests, because it wouldn’t know where to apply them.
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name}){
        const userAccount = await this.account.create({
            userId: ID.unique(),
            email,
            password,
            name,
        });
        if (userAccount) {
            return this.login({ email, password });
        }
        return userAccount;
    }

    async login({email,password}){
        const isLogin = await this.account.createEmailPasswordSession({
            email,
            password,
        });
        return isLogin;
    }

    async curr_user(){
        const is_curr_user = await this.account.get();
        return is_curr_user;
    }

    async logout(){
        return await this.account.deleteSession('current');
    }
}
const auth_service=new AuthService(); // object of the class AuthService

export default auth_service // exporting object so that user get easy excess to the functions of class. 





// use of this file.....................

// in the future if the project database gets change then we just neet to change this file only not he entire frontend.Account

// we just need the documentation of the new database .........documentation-> how to create account,login,logout,etc