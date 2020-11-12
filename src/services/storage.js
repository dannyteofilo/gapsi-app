
import { dataWelcome, products,videoGames } from './fixtures/products';
class Storage {
    constructor() {
        this.data = { ...dataWelcome };
        this.products = { ...products }
        this.videogames = {...videoGames}
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
                resolve(this.videogames);
            }, 1000)
        });
    }


}

const storage = new Storage();

export default storage;