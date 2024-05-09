import { Articles_T } from './Articulos';
import mongoose, { Document, Schema, PopulatedDoc } from 'mongoose';


interface FamilyType extends Document {
    fam_nombre: string;
    articles: PopulatedDoc<Articles_T & Document>;
}

const FamilySchema: Schema = new Schema({
    fam_nombre: { type: String, required: true },
    articles: [{
        type: Schema.Types.ObjectId,
        ref: 'Articulos'
    }]
});

const Family = mongoose.model<FamilyType>('Familias', FamilySchema);

export default Family;
