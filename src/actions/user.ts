import * as types from "./types"

export function getItem(users:any) {
 return {
  type: types.GET_ITEMS_REQUESTED,
  payload: users,
 }
}