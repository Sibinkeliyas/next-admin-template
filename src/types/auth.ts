export type UserProps = {
  id: number;
  email: string;
};

export type AuthProps = {
  error?: null | string;
  isAuthenticated: boolean
  user: null | UserProps;
};
