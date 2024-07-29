import { LOGIN } from "./constant";

export const login = data => ({
  type:LOGIN,
  payload: ({
    userId:data.userId,
    email:data.email
  })
})
