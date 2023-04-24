import { Router } from "express";
import productController from "./products/product.controller";
import stockController from "./stock/stock.controller";

const routes = Router()

routes.post('/products', productController.create)
routes.get('/products', productController.findAll)
routes.get('/products/:id', productController.findOne)
routes.put('/products/:id', productController.updateOne)
routes.delete('/products/:id', productController.deleteOne)
routes.get('/stock', stockController.findStockValue)
routes.get('/products-random', productController.findRandom)
routes.get('/total-stock', stockController.totalStockValue)
routes.get('/write-products', productController.writeProducts) // Não sei se era pra função de escrita ser um get ou um post
routes.get('/read-products', productController.readProducts) /*Essa rota le o arquivo só que de maneira muito bizarra,
                                                               provavelmente falta fazer algo ou eu fiz tudo errado,
                                                                porém foi a unica maneira que consegui fazer */

export default routes