import request from "@/utils/request";
export const getMyInfo = (params: any) =>
  request({
    url: "/me",
    method: "get",
    params
  });
export const getUserFriends = (userId: string, params: any) =>
  request({
    url: `/${userId}/friends`,
    method: "get",
    params
  });
