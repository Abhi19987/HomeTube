import { Schema, model } from "mongoose";
import { User } from "../Users/users.model";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: { type: String, required: true },
    thumbNail: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: User, required: true },
    duration: { type: Number, required: true },
    views: { type: Number, required: true },
    isPublished: { type: Boolean, required: true },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = model("Video", videoSchema);
