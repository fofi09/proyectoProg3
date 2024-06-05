import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";


import admin from '../models/admin.model.js';

export const registroAdmin= async (req, res)=>{
   const {administrador,emailAdmin,claveAdmin}= req.body;

   try{
   const claveEncriptadaa= await bcrypt.hash(claveAdmin, 10);//hash es string aleatorio, nos va a dar una contraseña encrptada con esos string aleatorios
 const nuevoAdmin= new admin(
       {
          administrador,
          emailAdmin,
          claveAdmin:claveEncriptadaa
       });
   
      const adminGuardado= await nuevoAdmin.save();
    const token= await createAccessToken({id: adminGuardado._id})

   res.cookie('token', token);
  res.json({
   id:adminGuardado._id,
   administrador: adminGuardado.administrador,
   emailAdmin: adminGuardado.emailAdmin,
  });

   }
   catch(error){
      res.status(500).json({message: error.message})
   }
  
};
  //aqui los administradores ingresan sus datos, si son correctos entran al registro usuarios ya que ellos son los que van a generar el registro de usuario, osea 
  //no culquiera se puede registrar en el registro usuario, solo pueden hacerlo las secretarias q son las encargadas de hacer eso
  //y una vez q los admin generen un usuario a un familiar del paciente recien ellos pueden iniciar sesion en el login
  //y entrar a una pagina que aun no esta hecha pero sera para sacar turnos
  export const loginAdmin= async (req, res)=>
   {
       const {emailAdmin,claveAdmin}= req.body;

       try { 

        const adminEncontrado= await admin.findOne({ emailAdmin });///findOne busca un usuario
     //userFound evalua si el corrreo existe
        if(!adminEncontrado) return res.status(400).json({ message:"Acceso denegado, administrador no encontrado" });

       const comparar= await bcrypt.compare(claveAdmin, adminEncontrado.claveAdmin);//compare: compara el usuario de la base de datos con el usuario q el cliente ingresa
       //valida q existe el compare, comparando
       if(!comparar) return res.status(400).json({ message:"Contraseña incorrecta" });

         const token= await createAccessToken({ id: adminEncontrado._id});

          res.cookie('token', token);
         
        res.json({
           id: adminEncontrado._id,
           administrador: adminEncontrado.administrador,
           emailAdmin: adminEncontrado.emailAdmin
        });
        res.redirect('/registroUsuario'); 
       }
       catch(error){
          console.log("Administrador no encontrado");
       }
  };
 
///////////////////////
export const registroUsuario= async (req, res)=>{
    const {nombre,apellido,familiar,email, claveSegura}= req.body;

    try{
    const claveEncriptada= await bcrypt.hash(claveSegura, 10);//hash es string aleatorio, nos va a dar una contraseña encrptada con esos string aleatorios
  const nuevoUsuario= new User(
        {
            nombre,
            apellido,
            familiar,
            email,
            claveSegura: claveEncriptada,
        });
    
       const usuarioGuardado= await nuevoUsuario.save();
     const token= await createAccessToken({id: usuarioGuardado._id})

    res.cookie('token', token);
   res.json({
    id:usuarioGuardado._id,
    nombre: usuarioGuardado.nombre,
    apellido: usuarioGuardado.apellido,
    familiar: usuarioGuardado.familiar,
    email: usuarioGuardado.email,
    createdAt: usuarioGuardado.createdAt,
    updatedAt: usuarioGuardado.updatedAt,
   });

    }
    catch(error){
       res.status(500).json({message: error.message})
    }
   
};


 export const loginUsuario= async (req, res)=>
    {
        const {email,claveSegura}= req.body;

        try { 

         const usuarioEncontrado= await User.findOne({ email });///findOne busca un usuario
      //userFound evalua si el corrreo existe
         if(!usuarioEncontrado) return res.status(400).json({ message:"Usuario no encontrado" });

        const comparar= await bcrypt.compare(claveSegura, usuarioEncontrado.claveSegura);//compare: compara el usuario de la base de datos con el usuario q el cliente ingresa
        //valida q existe el compare, comparando
        if(!comparar) return res.status(400).json({ message:"Contraseña incorrecta" });

          const token= await createAccessToken({ id: usuarioEncontrado._id});

           res.cookie('token', token);
         res.json({
            id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            email:usuarioEncontrado.email,
            createdAt: usuarioEncontrado.createdAt,
            updatedAt: usuarioEncontrado.updatedAt,

         });
        }
        catch(error){
           console.log("no se encontro el usuario, verifique por favor los datos ingresados");
        }
   };
    
export const cerrarSesion=(req,res)=>{
   res.cookie('token',"", {
      expires: new Date(0),
   });
   return res.sendStatus(200);
};

export const perfil= async(req,res)=> //va a recibir un req y un res 
   {
     const usuarioEncontrado=await User.findById(req.user.id)//usuario
     //si no hay ningun usuario, osea si no se lo encuentra
     if(!usuarioEncontrado) return res.status(400).json({ message:"Usuario no encontrado"})
     
      return res.json({
         id: usuarioEncontrado._id,
         nombre: usuarioEncontrado.nombre,
         apellido: usuarioEncontrado.apellido,
         email:usuarioEncontrado.email,
         createdAt: usuarioEncontrado.createdAt,
         updatedAt: usuarioEncontrado.updatedAt,
      })
   };