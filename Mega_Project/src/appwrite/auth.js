/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import conf from "../conf/config.js"

import { Client ,ID, Account } from "appwrite";

// making a class and call its object
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account=new Account(this.client);
    }   

    // signup functionality
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if(userAccount){
                // call another method
                return this.login({email,password});
            }
            else{
                return null;
            }


        } catch(error){
            throw error;
        }
    }

    // signin functionality
    async login({email,password}){
        try {
           return  await this.account.createEmailPasswordSession(email,password);
            
        } catch (error) {
            throw error;
        }

    }

    // get account of Current User
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
            
        }
        return null;
    }

    // logout Functionality
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
        }
    }


}

const authService = new AuthService();


export default authService