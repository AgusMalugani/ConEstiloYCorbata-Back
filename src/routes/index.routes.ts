import {Router,Request,Response} from "express";
import productRouter from "./product.routes";
import orderRouter from "./order.routes";

const router = Router();


router.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

router.use("/product",productRouter);
router.use("/order",orderRouter);

export default router;