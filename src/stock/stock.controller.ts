import { stockService } from "./stock.Service";
import { Response, Request } from "express";

class StockController{

    async findStockValue( req: Request, res: Response){
        const findedStockValue = await new stockService().stockValue()

        return res.status(200).json(findedStockValue)
    }

    async totalStockValue(req: Request, res: Response){
        const total = await new stockService().stockTotalValue()

        return res.status(200).json(total)
    }
}

export default new StockController()