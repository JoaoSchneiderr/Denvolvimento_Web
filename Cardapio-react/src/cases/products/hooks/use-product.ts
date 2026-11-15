import { useEffect, useState } from "react";
import type { Product } from "../dtos/product";
import { ProductService } from "../services/product-service";

export function useProducts() {

    const [products, setProducts] = useState <Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        ProductService.listAll()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    

    return { products, loading, error };
}