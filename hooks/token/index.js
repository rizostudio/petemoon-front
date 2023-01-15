import { selectRefreshToken, setRefreshToken } from "@/redux/base";
import { PostRefreshToken } from "@/services/shared";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useToken() {
  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);
  const router = useRouter();

  const set = useCallback((newRefreshToken) => {
    dispatch(setRefreshToken(newRefreshToken));
  }, []);

  const refresh = useCallback(async () => {
    const response = await PostRefreshToken(refreshToken);
    if (response.success) return;
    console.log("Error: ", response.errors);
    router.push("/login");
  }, [refreshToken]);

  const withRefresh = useCallback(async (fn) => {
    const response = await fn();
    if(response.success) return response;
    await refresh();
    return await fn();
  }, [refreshToken])

  return {
    set,
    withRefresh,
  };
}
