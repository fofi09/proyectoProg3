

export const validarSchema= (schema)=> (req, res, next)=> {
    try{
        schema.parse(req.body);// si se valida el esquema continua
        next()
    }
    catch(error){
        return res.status(400).json(error.errors.map((error)=>error.message));
       // return res.status(400).json(error.errors.map((error)=>error.message));

    }
};