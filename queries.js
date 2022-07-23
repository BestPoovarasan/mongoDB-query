// Find all the information about each products
db.products.find({});
// Find the product price which are between 400 to 800
db.products.find({product_price:{"$gt":400, "$lt":800}})
// Find the product price which are not between 400 to 600
db.products.find({$or: [{product_price: {"$lt":400}}, {product_price: {"$gt":600}}]})
// List the four product which are grater than 500 in price 
db.products.find({product_price: {"$gte": 500}})
// Find the product name and product material of each products
db.products.find({}, {"product_name":1, "product_material":1})
// Find the product with a row id of 10
db.products.find({id:"10"})
// Find only the product name and product material
db.products.find({}, {"_id":0, "product_name":1, "product_material":1})
// Find all products which contain the value of soft in product material 
db.products.find({product_material:'Soft'})
// Find products which contain product color indigo  and product price 492.00
db.products.find({$or: [{product_color: "indigo"}, {product_price: 492.00}]})
