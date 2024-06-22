import mongoose from 'mongoose'

const historialSchema= new mongoose.Schema({
    estadoAnimo:{
        type: String,
        required: true,
    },
    actividades:{
        type: String,
        required: true,
    },
    estadoSalud:{
        type: String,
        
    },
    //comentarios del personal
    observaciones:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'familiares directos',
        required: true,
    },
},
 {
    timestamps:true
});

export default mongoose.model("historial", historialSchema);