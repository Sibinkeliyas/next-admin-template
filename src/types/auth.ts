export type UserProps = {
  id: number;
  name: string;
  email: string;
};

export type AuthProps = {
  error?: null | string;
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: null | UserProps;
};
