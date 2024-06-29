import express from 'express';
import { createNutrient, getAllNutrients, getNutrientById, updateNutrient, deleteNutrient } from '../controller/nuttController.js';
const router = express.Router();

// Route to create a new nutrient
router.post('/', createNutrient);

// Route to get all nutrients
router.get('/', getAllNutrients);

// Route to get a nutrient by ID
router.get('/:id', getNutrientById);

// Route to update a nutrient by ID
router.put('/:id', updateNutrient);

// Route to delete a nutrient by ID
router.delete('/:id', deleteNutrient);

export default router;
