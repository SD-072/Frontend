type ApiEvent = {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  latitude: number;
  longitude: number;
  organizerId: number;
  createdAt: string;
  updatedAt: string;
};

type EventResponse = {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  results: ApiEvent[];
};

type User = {
  id: number;
  name: null | string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

type RegisterActionType =
  | {
      success: boolean;
      error?: undefined;
    }
  | {
      error: string;
      success?: undefined;
    };

export type { EventResponse, ApiEvent, User, RegisterActionType };
