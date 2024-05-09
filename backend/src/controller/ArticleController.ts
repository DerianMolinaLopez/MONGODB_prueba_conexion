import { Request,Response } from "express";
import { Articles } from "../model/Articulos";
import Family from "../model/Familias";
import  { Articles_T } from "../model/Articulos";
import { ObjectId } from "mongodb";
class Article{
    static async getArticle(req: Request, res: Response){
        
        const articulos = await Articles.find();
        if(articulos.length === 0){
            return res.send('no hay articulos')
        }
        res.json(articulos);
    }
    static async getArticlebyFamily(req: Request, res: Response){
        try{
            //busco primero la familia con ese nombre paraa traerme su id

            const {familia} = req.body;
            const familias = await Family.findOne({fam_nombre:familia});
            const id = familias?._id.toString()
            console.log(id)
            //ahora vamos a filtrar todos los articulos que tengan de familia id ese qeu acabamos de extraer
            const articulos = await Articles.find({family:'66391dab087de25b12a55d86'});

            res.json({articles:{articulos}});
        }catch(err){
            res.status(500).send('Error en el servidor');
            console.log(err);
        }
        
    }
    /*
    interface IArticle extends Document {
    
    art_name: string,
    art_description: string,
    art_price: number,
    stop:number
    family: Schema.Types.ObjectId
}

    */


static async addArticles(req: Request, res: Response) {
    try {
        const { nombre, descripcion, precio, stop, id, amount } = req.body;
   
        // Verificar si la familia existe y si ya hy un articulo con ese nombre
        const familia = await Family.findById(id);
        const articuloExist = await Articles.findOne({art_name:nombre});
        if (!familia) {
            return res.status(500).send('Familia no encontrada');
        }
        if(articuloExist){
            return res.status(500).send('Ya existe un articulo con ese nombre');
        }
        
        // Crear el artículo
        const articulo = new Articles({
            art_name: nombre,
            art_description: descripcion,
            art_price: precio,
            stop,
            family: familia._id, // Asignar el ID de la familia al artículo
            amount
        });

        // Agregar el ID del artículo a la familia
        familia.articles.push(articulo._id); // Asumiendo que `productos` es un array en tu modelo de Familia

        await Promise.all([familia.save(), articulo.save()]);

        // Solo enviar la respuesta una vez cuando todo esté hecho
        res.send('Artículo creado y agregado a la familia correctamente');
    } catch (err) {
        console.log(err.message);
        // Si ocurre un error, enviar una respuesta de error
        res.status(500).send('Error en el servidor');
    }
}
}

export default Article;