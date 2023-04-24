import { Number } from "mongoose";
import { ProductService } from "../products/product.Service";
export class stockService{
    constructor(){}

    async stockValue(){
        const products = await new ProductService().list()
        
        const productValue = products.map(product => product.quant * product.price) 
        const productStock = products.map((item: any,i: any) =>({...item, value: productValue[i]})
        )
        return productStock
        /*Não entendi se era para trazer só um array novo com todos os valores ou um novo array com as antigas
          informações dos produtos mais o valor, tenho certeza que ta tudo feito na gambiarra, mas foi assim
          que eu consegui fazer, tambem ta trazendo um monte de outras coisas que eu nao sei como tirar, embaixo vai ter mais gambiarra ainda*/
    }

    async stockTotalValue(){
        const products = await new ProductService().list()

        const productValue = products.map(product => product.quant * product.price)
        const totalValue = productValue.reduce((total, current) => 
        total = total + current)
        return totalValue
        //Como eu disse anteriormente, isso daqui ta na pura gambiarra, tentei fazer de umas 7 maneiras diferentes
        //essa foi a unica que realmente deu certo
    }
}