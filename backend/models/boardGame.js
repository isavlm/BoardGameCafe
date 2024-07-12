    import mongoose from "mongoose";
    const Schema = mongoose.Schema;

    /**
     * BoardGame Schema
     * @constant {Schema}
     */
    const boardGameSchema = {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    minPlayers: {
        type: Number,
        required: true,
    },
    maxPlayers: {
        type: Number,
        required: true,
    },
    playTime: {
        type: Number,
        required: true, // this should be in minutes
    },
    ageRecommendation: {
        type: Number,
        required: true, // minimum age, e.g., 3
    },
    availability: {
        type: Boolean,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true, // 1-5 scale where 1 is easy, 5 is hard
    },
    };

    export default new Schema(boardGameSchema);
