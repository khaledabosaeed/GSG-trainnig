/* eslint-disable @typescript-eslint/no-explicit-any */

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://fakestoreapi.com";

export interface ApiRequestOptions extends RequestInit {
  requiresAuth?: boolean;
}
export async function apiClient(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<Response> {
  const { headers = {}, ...restOptions } = options;

  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...(headers as Record<string, string>),
  };
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${API_BASE_URL}${endpoint}`;
  // Make request
  const response = await fetch(url, {
    ...restOptions,
    headers: requestHeaders,
  });

  return response;
}

export const api = {
  post: async (endpoint: string, data?: any, options?: ApiRequestOptions) => {
    const response = await apiClient(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Request failed" }));
      throw new Error(error.message);
    }
    return await response.json();
  },
  get: async (endpoint: string, options?: ApiRequestOptions) => {
    const response = await apiClient(endpoint, {
      ...options,
      method: "GET",
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Request failed" }));
      throw new Error(error.message);
    }
    return await response.json();
  },
  put: async (endpoint: string, data?: any, options?: ApiRequestOptions) => {
    const response = await apiClient(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Request failed" }));
      throw new Error(error.message);
    }
    return await response.json();
  },
  patch: async (endpoint: string, data?: any, options?: ApiRequestOptions) => {
    const response = await apiClient(endpoint, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Request failed" }));
      throw new Error(error.message);
    }
    return await response.json();
  },
  delete: async (endpoint: string, data?: any, options?: ApiRequestOptions) => {
    const response = await apiClient(endpoint, {
      ...options,
      method: "DELETE",
      body: data ? JSON.stringify(data) : undefined,
    });
    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Request failed" }));
      throw new Error(error.message);
    }
    return await response.json();
  },
};
