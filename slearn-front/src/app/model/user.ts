export interface User {
  id?: number,  //? == optional param
  firstname: string,
  lastname: string,
  email: string,
  password?: string,
  passwordRepeat?: string,
}
