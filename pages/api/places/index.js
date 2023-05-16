// api/jokes/index.js
import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Places";
import { getServerSession } from "next-auth/react";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions)

  if (request.method === "GET") {
    const places = await Place.find({author: session.user.email}); //the object will only display places with author of user. Without object it will display all
    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    try {
      if(session){
      const placeData = request.body;
      const place = new Place({...placeData, author: session.user.email});
      await place.save();
      return response
        .status(201)
        .json({ status: "Place created." }.router.push("/"));
    } 
   else{
    response.status(401).json({status:"Not authorized"})
   } 
  }catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
