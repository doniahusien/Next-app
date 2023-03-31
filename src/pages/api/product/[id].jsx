import {products} from '../../../../productData'

export default function handler(req, res) {
    let id = req.query.id
    let product = products.find( p=>p.id == id)
    res.status(200).json(product)
  }
  