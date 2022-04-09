import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const productValue=useParams();
  return (
    <div>ProductDetail-{productValue.productid}</div>
  )
}

export default ProductDetail