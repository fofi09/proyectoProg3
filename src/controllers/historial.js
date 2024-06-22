import historial from '../models/historial.models.js'

export const obtenerHistorial=async (req,res)=>{
    const obtHistorial= await historial.find({
        user: req.user.id
    }).populate('user')
    res.json(obtHistorial)
};
export const createHistorial=async (req,res)=>{
    const {estadoAnimo,actividades,estadoSalud,observaciones,date}= req.body;
    console.log(req.user)
   const nuevoHistorial= new historial({
        estadoAnimo,
        actividades,
        estadoSalud,
        observaciones,
        date,
        user: req.user.id
    })
   const guardarHistorial= await nuevoHistorial.save()
   res.json(guardarHistorial);
};
export const idHistorial=async (req,res)=>{
    const task = await historial.findById(req.params.id).populate('user');
    if(!task)return res.status(404).json({message: 'no se encontro'})
        res.json(task)
};

export const borrarHistorial=async (req,res)=>{
    const borrarHistorial = await historial.findByIdAndDelete(req.params.id)
    if(!borrarHistorial)return res.status(404).json({message: 'no se borro'});
    return res.sendStatus(204);
        
};
export const actualizarHistorial=async (req,res)=>{
    const actualizarHistorial = await historial.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })
    if(!actualizarHistorial)return res.status(404).json({message: 'no se encontro por lo tanto no se actualizo'})
        res.json(actualizarHistorial)
};