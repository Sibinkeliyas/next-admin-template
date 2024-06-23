import LoginGuard from '@/utils/routeGuard/LoginGuard';

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <LoginGuard>{children}</LoginGuard>;
}
