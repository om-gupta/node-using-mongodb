import { addNewProduct} from '../controllers/controllers'

const routes = (app) => {
    app.routes('/product')

    .post(addNewProduct);
}

export default routes;