import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true, // remove whitespace
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 64,
        },
        picture: {
            type: String,
            default: "https://firebasestorage.googleapis.com/v0/b/code94labs-6ea5d.appspot.com/o/user-avatar.png?alt=media&token=3a823703-f8a3-4a07-970c-04f351353920",
        },
        role: {
            type: [String],
            default: ["User"],
            enum: ["User", "Seller", "Admin"],
        },
    },
    {timestamps: true},
);

export default mongoose.model("User", userSchema);
