import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const encodeUrl = (url) => {
  return url.replace(/ /g, "-").toLowerCase();
}

export const decodeUrl = (url) => {
  return url.replace(/-/g, " ");
}

export const formatDate = (date) => {
  const now = new Date();
  const inputDate = new Date(date);
  const diffMs = now - inputDate;
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSeconds < 60) {
    return "just now";
  } else if (diffMinutes < 60) {
    return `${diffMinutes}m ago`;
  } else if (diffHours < 24) {
    return `${diffHours}h ago`;
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks} weeks ago`;
  } else if (diffMonths < 12) {
    return `${diffMonths} months ago`;
  } else {
    return `${diffYears} years ago`;
  }
}

export const validateInputs = (inputs, schema) => {
  try {
    const parsedInputs = schema.parse(inputs);
    return { success: true, data: parsedInputs };
  } catch (error) {
    return {
      success: false,
      errors: error.errors.map((err) => ({
        path: err.path,
        message: err.message,
      })),
    };
  }
};


export const ROLES = [
  "ADMIN",
  "USER",
  "OWNER",
  "AUTHOR"
]

