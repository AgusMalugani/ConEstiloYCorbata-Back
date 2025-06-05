import {Router,Request,Response} from "express";
import productRouter from "./product.routes";
import orderRouter from "./order.routes";

const router = Router();



router.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

router.use("/products",productRouter);
router.use("/orders",orderRouter);

export default router;