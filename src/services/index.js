import storage from './storage';
import Storage from './storage';
class GapsiService {         

    welcome() {        
        return Storage.welcomeData();            
    }

    products(){
        return Storage.getProducts();
    }
}

const service = new GapsiService();

export default service;