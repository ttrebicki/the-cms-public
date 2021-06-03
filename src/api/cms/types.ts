interface IPost {
  _id: string;
  __v: number;
  create_date: string;
  friendly_create_date: string;
  content: string;
  images: string[];
  thumbnailImage: string;
  title: string;
}

interface INewPostResponse {
  message: string;
  data: IPost[];
}

interface IPostFormData {
  content: string;
  images?: string[];
  thumbnailImage?: string;
  title: string;
}

export type { INewPostResponse, IPost, IPostFormData };
