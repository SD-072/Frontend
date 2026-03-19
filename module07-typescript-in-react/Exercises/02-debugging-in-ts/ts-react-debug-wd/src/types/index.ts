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

type LoginActionType =
  | {
      success: boolean;
      user: {
        id: number;
        email: string;
      };
      token: string;
      error?: undefined;
    }
  | {
      error: string;
      success?: undefined;
      user?: undefined;
      token?: undefined;
    };

type LoginResponse = {
  user: Pick<User, 'id' | 'email'>;
  token: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (token: string | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
};

type CreateEventActionType =
  | {
      success: boolean;
      message: string;
      error?: undefined;
    }
  | {
      error: string;
      success?: undefined;
      message?: undefined;
    };

export type {
  EventResponse,
  ApiEvent,
  User,
  RegisterActionType,
  LoginActionType,
  LoginResponse,
  AuthContextType,
  CreateEventActionType
};
