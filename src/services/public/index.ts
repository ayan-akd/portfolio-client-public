/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

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