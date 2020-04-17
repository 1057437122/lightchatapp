import request from "@/utils/request";

export const getUserGroups = (userId: string, params: any) =>
  request({
    url: `/${userId}/groups`,
    method: "get",
    params
  });

export const postOnGroup = (groupId: string, params: any) =>
  request({
    url: `/${groupId}/feed`,
    method: "post",
    params
  });
