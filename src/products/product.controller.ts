import { ReplOptions } from "repl";
import productSchema from "./product.Schema";
import { ProductService } from "./product.Service";
import { Request, Response } from "express";
import { readFile } from "fs";

class ProductController{

    async create(req: Request, res: Response){
        const createdProduct = await new ProductService().create(req.body)

        return res.status(201).json(createdProduct)
    }

    async findAll (req: Request, res: Response){
        const findedProducts = await new ProductService().list()

        return res.status(200).json(findedProducts)
    }

    async findOne (req: Request, res: Response){
        const findedProduct = await new ProductService().listOne(req.params.id)

        return res.status(200).json(findedProduct)
    }

    async updateOne (req: Request, res: Response){
        const updatedProduct = await new ProductService().update(req.params.id, req.body)

        return res.status(200).json(updatedProduct)
    }

    async deleteOne (req: Request, res: Response){
        const deleted = await new ProductService().delete(req.params.id)

        return res.status(200).json(deleted)
    }

    async findRandom (req: Request, res: Response){
        const fourRandom = await new ProductService().random()

        return res.status(200).json(fourRandom)
    }

    async writeProducts (req: Request, res: Response){
        const writeData = await new ProductService().write()

        return res.status(200).json(writeData)
    }

    async readProducts (req: Request, res: Response){
        const readData = await new ProductService().read()

        return res.status(200).json(readData)
    }
}

export default new ProductController()