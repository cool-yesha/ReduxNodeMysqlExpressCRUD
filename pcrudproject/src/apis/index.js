import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'

export const getProductAPI = async () => await axios.get('/api/admin/product')
export const createProductAPI = async (product) => {

  const data = new FormData();
  data.append('ProductID', 0);
  data.append('ProductName', product.ProductName);
  data.append('Description', product.Description);
  data.append('Price', product.Price);
  data.append('Photo', product.selectedFile);
  data.append('Status', product.Status);

  var object = {};
  data.forEach((value, key) => object[key] = value);

  console.log("josn ----" + JSON.stringify(object))

  var file = product.selectedFile;

  var fileData = {
    file: {
      modified: file.lastModifiedDate,
      name: file.name,
      size: file.size,
      type: file.type
    }
  }

  // Convert data to JSON string.
  var serializedData = JSON.stringify(fileData);


  console.log("sgdhsfshgdfhsgdfshgdfshd" + serializedData)
  await axios.post(`/api/admin/product`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const updateProductAPI = async (product) => {

  const data = new FormData();
  data.append('ProductID', product.ProductID);
  data.append('ProductName', product.ProductName);
  data.append('Description', product.Description);
  data.append('Price', product.Price);
  data.append('Photo', product.selectedFile);
  data.append('Status', product.Status);

  var object = {};
  data.forEach((value, key) => object[key] = value);

  console.log("josn ----" + JSON.stringify(object))

  var file = product.selectedFile;

  var fileData = {
    file: {
      modified: file.lastModifiedDate,
      name: file.name,
      size: file.size,
      type: file.type
    }
  }

  // Convert data to JSON string.
  var serializedData = JSON.stringify(fileData);


  console.log("sgdhsfshgdfhsgdfshgdfshd" + serializedData)
  await axios.put(`/api/admin/product/${product.ProductID}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export const deleteProductAPI = async (id) => await axios.delete(`/api/admin/product/${id}`)



