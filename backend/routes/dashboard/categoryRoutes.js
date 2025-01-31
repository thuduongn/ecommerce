const categoryController = require('../../controllers/dashboard/categoryController')
const router = require('express').Router()

router.post('/category-add', categoryController.addCategory)
router.get('/category-get', categoryController.getCategory)
router.put('/category-update/:id', categoryController.updateCategory)
router.delete('/category/:id', categoryController.deleteCategory)


module.exports = router