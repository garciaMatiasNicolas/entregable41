import MongoDAO from "../models/DAO.js"
import UserService from "./users.js"
import config from "../config/config.js"

let dao
switch(config.mongo.app.persistence) {
    case "MONGO":
        dao = new MongoDAO(config.mongo)
        break
}

export const userService = new UserService(dao)