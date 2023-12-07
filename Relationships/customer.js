const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/rd1");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

const Order = mongoose.model("Order", orderSchema);

const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  // let cus1 = new Customer({
  //   name: "manan",
  // });

  // let order1 = await Order.findOne({ item: "samosa" });
  // let order2 = await Order.findOne({ item: "mango" });

  // console.log(order1, order2);

  // cus1.orders.push(order1);
  // cus1.orders.push(order2);

  // let res = await cus1.save();

  let res = await Customer.find().populate("orders");
  console.log(res[0]);
};

addCustomer();

// const OrderItems = async () => {
//   let order1 = await Order.insertMany([
//     { item: "samosa", price: 12 },
//     { item: "chips", price: 10 },
//     { item: "mango", price: 30 },
//   ]);
//   console.log(order1);
// };
// OrderItems();
