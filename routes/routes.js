import { Router } from "express";

import userControllers from '../controllers/users.js'

const router = Router()

router.get('/', userControllers.getUsers)
router.post('/', userControllers.saveUser)

export default router