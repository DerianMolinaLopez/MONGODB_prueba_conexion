import express from 'express';
import Article from '../controller/ArticleController';
import { body } from 'express-validator';
import handleValidationErrors from '../middleware/validator';
const routerArticle = express.Router();


routerArticle.get('/',(req,res)=>{
    res.send('Articulos conectados');
})
routerArticle.get('/getArticles',Article.getArticle);
/*
{
"nombre":"Pepsi 600",
"descripcion":"Rfresco de cola"
,"precio":16.00,
"stop":30,
"id":"66391dab087de25b12a55d86",
"amount":15
}
*/
routerArticle.get('/getArticles-family',Article.getArticlebyFamily);
routerArticle.post('/addArticles',
                        body('id').notEmpty().withMessage('The name is necessary'),
                        body('descripcion').notEmpty().withMessage('Description is necessary'),
                        body('precio').notEmpty().withMessage('Price is necessary'),
                        body('stop').notEmpty().withMessage('Stop is necessary'),
                        body('amount').notEmpty().withMessage('Amount is necessary'),
                        handleValidationErrors,
                      Article.addArticles);
export default routerArticle;