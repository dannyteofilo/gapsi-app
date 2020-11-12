
import { dataWelcome, products } from './fixtures/products';
class Storage {
    constructor() {
        this.data = { ...dataWelcome };
        this.products = { ...products }
    }

    welcomeData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 1000)
        });
    }

    getProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.products);
            }, 1000)
        });
    }


}

const storage = new Storage();

export default storage;