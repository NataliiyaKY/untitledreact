import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json', charset: 'utf-8'},
})

const getAllPosts = (): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get('/users')
}

const getAllcommentsOfSinglePost = (id: number): Promise<AxiosResponse<ICommentModel[]>> => {
    return axiosInstance.get('/comments/?postId=' + id)
}


export {getAllPosts, getAllcommentsOfSinglePost}