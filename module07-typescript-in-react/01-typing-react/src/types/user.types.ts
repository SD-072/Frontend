type User = {
  id: number;
  username: string;
  info: string;
};

type ComponentStatus = 'idle' | 'loading' | 'success' | 'error';

export type { User, ComponentStatus };
