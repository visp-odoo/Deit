import mongoose from "mongoose";
import validator from "validator";

const nutSchema = new mongoose.Schema({
    foodName: {
        type: String, 
        required: true,
        minlength: [3, "Food Name should contain at least 3 letters"],
    },
    calories: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isFinite,
            message: 'Calories must be a number',
        }
    },
    protein: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isFinite,
            message: 'Protein must be a number',
        }
    },
    fat: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isFinite,
            message: 'Fat must be a number',
        }
    },
    carbohydrates: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isFinite,
            message: 'Carbohydrates must be a number',
        }
    },
    fiber: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isFinite,
            message: 'Fiber must be a number',
        }
    },
    sugar: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isFinite,
            message: 'Sugar must be a number',
        }
    },
    vitamins: {
        type: String,
        required: true,
    },
    minerals: {
        type: String,
        required: true,
    },
    servingSize: {
        type: String,
        required: true,
    },
    
});

export const Nutrient = mongoose.model("Nutrient", nutSchema);
