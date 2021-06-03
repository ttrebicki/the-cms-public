import axios from "axios";
import { INewPostResponse } from "./types";

class PostsApi {
  public createNewPost(post: string): Promise<INewPostResponse> {
    const createConfig = {
      url: "http://localhost:8080/api/posts",
      headers: {
        "Content-Type": "application/json",
      },
      data: post,
    };

    return new Promise<INewPostResponse>((resolve, reject) => {
      axios({ ...createConfig, method: "POST" })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public editPost(id: string, post: string): Promise<INewPostResponse> {
    const editConfig = {
      url: ` http://localhost:8080/api/posts/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: post,
    };

    return new Promise<INewPostResponse>((resolve, reject) => {
      axios({ ...editConfig, method: "PUT" })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  }

  public getPosts(id?: string): Promise<INewPostResponse> {
    const getConfig = {
      url: id
        ? ` http://localhost:8080/api/posts/${id}`
        : ` http://localhost:8080/api/posts`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    return new Promise<INewPostResponse>((resolve, reject) => {
      axios({ ...getConfig, method: "GET" })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  }
}

export default new PostsApi();
