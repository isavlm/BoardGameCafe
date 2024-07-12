import express from "express";
import baseCtrl from "../controllers/homeCtrl";
import insertionCtrl from "../controllers/insertionCtrl";
import searchCtrl from "../controllers/searchCtrl";
import updateCtrl from "../controllers/updateCtrl";
import deleteCtrl from "../controllers/deleteCtrl";

const router = express.Router();

// home page
router.route("/home").get(baseCtrl.basePage);

// All GET or request to READ
router.route("/boardgames").get(searchCtrl.getAllBoardGames);

// Search request (also a GET)
router.route("/search/name/:searchQuery").get(searchCtrl.searchByName); //search boardgame by name
router.route("/search/id/:searchQuery").get(searchCtrl.searchById);
router.route("/search/category/:searchQuery").get(searchCtrl.searchByCategory);


//commented out for now - will add later
// // ALL POST or request to Insert/Create
// router.route("/boardgames").post(insertionCtrl.insertBoardGame);

// // ALL PUT or request to update a board game
// router.route("/boardgames/:boardGameId").put(updateCtrl.updateBoardGame);

// // ALL DELETE or request to remove something from the DB
// router.route("/boardgames/:boardGameId").delete(deleteCtrl.deleteBoardGame);

export default router;
