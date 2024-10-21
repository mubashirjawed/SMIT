import mongoose, { connect } from "mongoose";

export async function ConnectDB() {
  let isConnected = false;
  if (isConnected) {
    return "DB is alrealy connected"
  }
  try {
    let Connected = await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is Connected Successfully..");
    
    if(Connected.connection.readyState == 1) isConnected = true;
  } catch (error) {
    console.log(error);
  }
}
