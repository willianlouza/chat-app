export function toUrlParam(roomName: string) {
  return roomName.toLowerCase().split(" ").join("-");
}

export function toRoomName(param: string) {
  return param
    .split("-")
    .map((name) => name.charAt(0).toUpperCase() + name.substring(1))
    .join(" ")
}
