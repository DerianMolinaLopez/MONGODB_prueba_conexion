import mongoose, { Document, Schema } from 'mongoose';

export interface IArticle extends Document {
    
    art_name: string,
    art_description: string,
    art_price: number,
    stop:number
    family: Schema.Types.ObjectId,
    amount:number
}

const ArticlesSchema = new Schema<IArticle>({

    art_name: {type: String, required: true},
    art_description: {type: String, required: true},
    art_price: {type: Number, required: true},
    stop: {type: Number, required: true},
    amount:{type:Number,required:true},
    family: {
        type: Schema.Types.ObjectId,
        ref: 'Familias'
    }
})

const Articles = mongoose.model<IArticle>('Articulos', ArticlesSchema)

export {
    IArticle as Articles_T,
    Articles
}