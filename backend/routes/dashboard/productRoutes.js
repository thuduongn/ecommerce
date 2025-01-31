const productController = require('../../controllers/dashboard/productController') 
const router = require('express').Router()

router.post('/product-add', productController.add_product)  
router.get('/products-get', productController.products_get)  
router.get('/product-get/:productId', productController.product_get)
router.post('/product-update', productController.product_update) 
router.post('/product-image-update', productController.product_image_update)   

module.exports = router