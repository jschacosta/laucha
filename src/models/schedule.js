import mongoose from "mongoose";
const Schema = mongoose.Schema;
import uniqueValidator from 'mongoose-unique-validator';

const scheduleSchema = new Schema(
  {
    hotel:{type:String, ref:"User", unique: true},
    times:{
        monday:{type:Array, default:[]},
        tuesday:{type:Array, default:[]},
        wednesday:{type:Array, default:[]},
        thursday:{type:Array, default:[]},
        friday:{type:Array, default:[]},
        saturday:{type:Array, default:[]},
        sunday:{type:Array, default:[]}
     },
    isActive: { type: Boolean, default:true },
    details:{type:String},
    imgUrl: {type:String},
    coverImg: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Schedule= mongoose.model("Schedule", scheduleSchema);
export default Schedule;


