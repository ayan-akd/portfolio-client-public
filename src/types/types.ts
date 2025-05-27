export type TProject = {
  _id: string;
  title: string;
  images: string[];
  description: string;
  technology: string[];
  liveLink: string;
  clientRepo: string;
  serverRepo?: string;
  videoLink?: string;
  serial?: number;
};

export type TBlog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
};

export type TUser = {
  name: string;
  email: string;
  password: string;
};

export type TRUser = {
  email: string;
  name: string;
  __v: number;
  _id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TMessage = {
  message: string;
  email: string;
  name: string;
  markAsRead?: boolean;
};
