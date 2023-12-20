import * as types from "./types"

export function getItem(users:any) {
 return {
  type: types.GET_USERS_REQUESTED,
  payload: users,
 }
}