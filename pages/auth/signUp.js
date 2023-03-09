import SignUpForm from "@/components/signUp/SignUpForm";
import AuthLayout from "@/layout/auth/AuthLayout";
import React from "react";

export default function signUp() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}
