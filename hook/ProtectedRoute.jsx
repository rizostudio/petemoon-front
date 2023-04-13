import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "@/store/AuthCtx/AuthContext";
export default function ProtectedRoute({ children }) {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  console.log(authCtx);
  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      console.log(authCtx);
      router.push("/auth/login");
    }
  }, [router, authCtx.isLoggedIn]);

  // * If the user is logged in, render the children, otherwise, render null
  return <>{authCtx.isLoggedIn ? children : null}</>;
}
