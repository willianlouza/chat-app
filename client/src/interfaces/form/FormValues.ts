export interface FormValues {
  [x: string]: any;
}

export interface JoinRoom extends FormValues {
  username: string;
  roomName: string;
}
