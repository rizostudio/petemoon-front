import ValidationForm from "@/components/validation/ValidationForm";
import AuthLayout from "@/layout/auth/AuthLayout";
import React from "react";

export default function validation() {
  return (
    <AuthLayout>
      <ValidationForm />
    </AuthLayout>
  );
}
