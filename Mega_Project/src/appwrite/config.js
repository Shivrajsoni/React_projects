/* eslint-disable no-unused-vars */
import conf from "../conf/config"

import { Client ,ID, Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client()
    databases
    bucket // storage 

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
       

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // create post
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error ",error);
        }
    }

    // update post
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error ",error);
        }
    }

    // deleting post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error ",error);

            return false;
        }
    }

    // single document required
    async getPost(slug){

        try {

            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error ",error);
            
        }
    }

    // all documents required
    async getPosts(queries = [Query.equal("status","active")] ){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
            
        } catch (error) {
            console.log("Appwrite Service :: AllPost :: error ",error);
            
        }
    }

    // file upload service ->upload and delete method
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error ",error);
            return false
        }
    }

    // delete files
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                 fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error ",error);
        }
    }

    // very fast so not done in async await
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()

export default service