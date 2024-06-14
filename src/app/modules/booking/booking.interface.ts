import { TFacility } from "../facilities/facilities.interface";
import { TUser } from "../user/user.interface";



export type TBooking={
  date: Date;
  startTime: Date;
  endTime: Date;
  user: TUser;
  facility: TFacility;
  payableAmount: number;
  isBooked: 'confirmed' | 'unconfirmed' | 'canceled';
}
