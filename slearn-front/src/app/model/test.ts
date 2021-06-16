import {Quiz} from "./quiz";

export interface Test {
  id?: number;  //? == optional param
  enemyTalk: string;
  quizes?: Quiz[];
}
