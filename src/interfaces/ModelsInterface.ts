import { CommentModel } from './../model/CommentModel';
import { PostModel } from './../model/PostModel';
import { UserModel } from "../model/UserModel";

export interface ModelsInterface{

    User: UserModel;
    Post: PostModel;
    Comment: CommentModel;
}