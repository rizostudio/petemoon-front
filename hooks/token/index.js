import { refreshTokenLS } from "@/localStorage";
import { PostRefreshToken } from "@/services/shared";
import { useRouter } from "next/router";
import { useCallback, useState, useEffect } from "react";

export default function useToken() {
  const [refreshToken, setRefreshToken] = useState();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    console.log("refreshToken setup: ", refreshTokenLS.get());
    setRefreshToken(refreshTokenLS.get());
    setIsReady(true);
  }, []);

  const router = useRouter();

  const set = useCallback((newRefreshToken) => {
    setIsReady(false);
    setRefreshToken(newRefreshToken);
    setIsReady(true);
  }, []);

  const refresh = useCallback(async () => {
    const response = await PostRefreshToken(refreshToken);
    if (response.success) return;
    console.log("Error: ", response.errors);
    router.push("/login");
  }, [refreshToken]);

  const withRefresh = useCallback(
    async (fn) => {
      console.log("withRefresh: ", refreshToken);
      const response = await fn();
      if (response.success) return response;
      await refresh();
      const reResponse = await fn();
      return reResponse;
    },
    [refreshToken]
  );

  return {
    set,
    withRefresh,
    isReady,
  };
}
