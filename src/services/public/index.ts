/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TMessage } from "@/types/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAboutData = async () => {
  try {
    const res = await fetch(`${apiUrl}/public/about`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    return result;
  } catch (error: any) {
    return error;
  }
};

export const getSkillsData = async () => {
  try {
    const res = await fetch(`${apiUrl}/public/skills`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return error;
  }
};

export const getProjectsData = async () => {
  try {
    const res = await fetch(`${apiUrl}/public/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return error;
  }
};

export const getSingleProjectData = async (id: string) => {
  try {
    const res = await fetch(`${apiUrl}/public/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return error;
  }
};

export const getBlogsData = async () => {
  try {
    const res = await fetch(`${apiUrl}/public/blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return error;
  }
};

export const getSingleBlogData = async (id: string) => {
  try {
    const res = await fetch(`${apiUrl}/public/blogs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return error;
  }
};

export const createMessage = async (data: TMessage) => {
  try {
    const res = await fetch(`${apiUrl}/public/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return error;
  }
};