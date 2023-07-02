export interface User {
    id:string;
    name:string;
    email:string;
    password:string;
    mobile:string;
}

export interface Vol{
    id:string;
    name:string;
    email:string;
    password:string;
    mobile:string;
}

export interface Donate{
    place: string;
    id:string;
    name:string;
    email:string;
    address:string;
    mobile:string;
    amount:string;
    
}

export interface Request{
    id:string;
    acc_hold_name:string;
    ifsc:string;
    bank_name:string;
    acc_mobile:string;
    acc_no:string;
    remarks:string;
    amount:string;
    
}

export interface Event{
    id:string;
    name:string;
  mobile:string;
  day:string;
  place:string;
}

export interface Book{
    id:string;
    name:string;
  mobile:string;
  day:string;
  place:string;
}
