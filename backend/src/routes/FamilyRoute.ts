import express from 'express'
import {body} from 'express-validator';
import FamilyController from '../controller/FamilyController';
import FamilyExist from '../middleware/FamilyExist';
import handleValidationErrors from '../middleware/validator';
//! simulando una regla de negocio
// ! una familia no se le podra cambiar el nombre

const router = express.Router();
router.get('/', FamilyController.getFamilies);
router.post('/',body('fam_nombre').notEmpty().withMessage('The name is necessary'), 
                handleValidationErrors,
                FamilyExist,
                FamilyController.createFamily)
router.get('/:id',
                  handleValidationErrors,
                  FamilyController.getFamilyByID);

export const RouterFamilies = router;