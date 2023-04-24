import { writeFile, readFile } from 'fs/promises';
import ProductModel from './product.Schema'
import { productType } from './types/product.type'

export class ProductService{
    constructor(){}

    async create(product: productType){
        await ProductModel.create(product)
    }

    async list(){
        const findedProducts = await ProductModel.find()
        return findedProducts;
    }

    async listOne(id: any){
        const product = await ProductModel.findById(id)
        return product;
    }
    
    async update(id: any, data: productType){
        const updatedProduct = await ProductModel.findOneAndUpdate({_id: id}, {
            name: data.name,
            quant: data.quant,
            price: data.price
        }, {new: true})

        return updatedProduct
    }

    async delete(id: any){
        await ProductModel.findByIdAndDelete(id)
        return("Delete Successful")
    }

    async random(){
        const products = await this.list()
        const shuffle = products.sort(() => 0.5 - Math.random());
        return shuffle.slice(0, 4)
    }

    async write(){
        const products = await this.list()
        try {
            writeFile('products.json', JSON.stringify(products, null, 2))
            return("File Successfuly Created")
        } catch (error) {
            console.error("Write Error", error)
        }
    }

    async read(){
        const readProducts = readFile('products.json', "utf-8")
        return readProducts
    }
}
