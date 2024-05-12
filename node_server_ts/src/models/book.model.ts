import { model } from "mongoose";
import { IBook } from "../@types/types/book.interface";
import bookSchema from "./schemaDefinitions/booking.schema";

const BookModel = model<IBook>("bookings", bookSchema);

export default BookModel;   
