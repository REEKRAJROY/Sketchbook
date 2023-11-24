import { io } from "socket.io-client";
const url = process.env.NODE_ENV === 'production' ? 'https://sketchbook-server-cwtl.onrender.com' : 'http://localhost:3500'
export const socket = io(url);