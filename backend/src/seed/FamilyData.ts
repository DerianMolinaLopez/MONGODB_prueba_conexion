import Family from "../model/Familias"
type FamilyTypeSeed = {
    fam_nombre: string;
    articles: string[];
}
const FamilyData: FamilyTypeSeed[] = [
    {
        fam_nombre: 'Enlatados',
        articles: []
    },
    {
        fam_nombre: 'Papel de baño',
        articles: []
    },
    {
        fam_nombre: 'Agua embotellada',
        articles: []
    },
    {
        fam_nombre: 'Cerveza',
        articles: []
    },
    {
        fam_nombre: 'Dulces',
        articles: []
    },
    {
        fam_nombre: 'Galletas',
        articles: []
    }
]
function seedFamilyData() {
    FamilyData.forEach(async (family) => {
        const newFamily = new Family(family)
        await newFamily.save()
    })
}
export default seedFamilyData