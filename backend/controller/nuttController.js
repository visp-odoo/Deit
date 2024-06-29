import { Nutrient } from '../models/nutSchema.js';

export const createNutrient = async (req, res) => {
    try {
        const nutrient = new Nutrient(req.body);
        await nutrient.save();
        res.status(201).json({ message: 'Nutrient created successfully', nutrient });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllNutrients = async (req, res) => {
    try {
        const nutrients = await Nutrient.find();
        res.status(200).json(nutrients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single nutrient by ID
export const getNutrientById = async (req, res) => {
    try {
        const nutrient = await Nutrient.findById(req.params.id);
        if (!nutrient) {
            return res.status(404).json({ message: 'Nutrient not found' });
        }
        res.status(200).json(nutrient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateNutrient = async (req, res) => {
    try {
        const nutrient = await Nutrient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!nutrient) {
            return res.status(404).json({ message: 'Nutrient not found' });
        }
        res.status(200).json({ message: 'Nutrient updated successfully', nutrient });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteNutrient = async (req, res) => {
    try {
        const nutrient = await Nutrient.findByIdAndDelete(req.params.id);
        if (!nutrient) {
            return res.status(404).json({ message: 'Nutrient not found' });
        }
        res.status(200).json({ message: 'Nutrient deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
