    import BoardGame from "..backend/models/BoardGame"; 

    // Get all board games
    export const getAllBoardGames = async (req, res) => {
    try {
        const boardGames = await BoardGame.find({});
        res.send(boardGames);
    } catch (error) {
        res.status(500).send(error);
    }
    };

    // Get a board game by ID
    export const getBoardGameById = async (req, res) => {
    try {
        const boardGame = await BoardGame.findById(req.params.id);
        if (!boardGame) {
        return res.status(404).send({ error: "Board game not found" });
        }
        res.send(boardGame);
    } catch (error) {
        res.status(500).send(error);
    }
    };

    // Create a new board game
    export const createBoardGame = async (req, res) => {
    try {
        const boardGame = new BoardGame(req.body);
        await boardGame.save();
        res.status(201).send(boardGame);
    } catch (error) {
        res.status(400).send(error);
    }
    };

    // Update a board game by ID
    export const updateBoardGame = async (req, res) => {
    try {
        const boardGame = await BoardGame.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        if (!boardGame) {
        return res.status(404).send({ error: "Board game not found" });
        }
        res.send(boardGame);
    } catch (error) {
        res.status(400).send(error);
    }
    };

    // Delete a board game by ID
    export const deleteBoardGame = async (req, res) => {
    try {
        const boardGame = await BoardGame.findByIdAndDelete(req.params.id);
        if (!boardGame) {
        return res.status(404).send({ error: "Board game not found" });
        }
        res.send({ message: "Board game deleted" });
    } catch (error) {
        res.status(500).send(error);
    }
    };
