import AuthLayout from "@/layout/auth/AuthLayout";
import LoginForm from "@/components/login/LoginForm";

export default function login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
