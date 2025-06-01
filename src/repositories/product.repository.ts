import { AppDataSource } from "../config/typeOrm.config";
import { Product } from "../models/Product/entities/product.entity";

const productRepository = AppDataSource.getRepository(Product);
export default productRepository;