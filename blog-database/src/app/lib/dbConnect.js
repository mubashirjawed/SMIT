import mongoose, { connect } from "mongoose";

export async function ConnectDB() {
  let isConnected = false;
  if (isConnected) {
    
  }
  try {
    let Connected = await mongoose.connect(process.env.MONGODB_URL);
    if(Connected.connection.readyState == 1) isConnected = true;
  } catch (error) {
    console.log(error);
  }
}
