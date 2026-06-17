import { ApiResponse } from "~/types";

export function createResponse<T>(
  success: boolean,
  data?: T,
  error?: string,
  code: number = success ? 200 : 400
): ApiResponse<T> {
  return {
    success,
    data,
    error,
    code,
  };
}

export function handleError(error: any): ApiResponse {
  console.error("API Error:", error);
  return createResponse(false, undefined, error?.message || "Internal server error", 500);
}

export function parseFormData(formData: FormData): Record<string, any> {
  const data: Record<string, any> = {};
  for (const [key, value] of formData) {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  return data;
}

export function getQueryParam(url: string, param: string): string | null {
  const urlObj = new URL(url);
  return urlObj.searchParams.get(param);
}

export function getPaginationParams(url: string): { page: number; limit: number } {
  const page = parseInt(getQueryParam(url, "page") || "1", 10);
  const limit = parseInt(getQueryParam(url, "limit") || "10", 10);
  return { page: Math.max(1, page), limit: Math.min(100, Math.max(1, limit)) };
}

export function calculateSkip(page: number, limit: number): number {
  return (page - 1) * limit;
}