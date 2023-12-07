// Mongoose middleware
// doc
// query
// aggrigate

const mongoose = require("mongoose");

const { Schema } = mongoose;
main()
  .then((res) => console.log("Db connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// SCHEMA
const orderSchema = new Schema({ item: String, price: Number });

const customerSchema = new Schema({
  name: String,
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

// MIddleware

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res, "res");
  }
});

//MODEL
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  // let cus = new Customer({ name: "mohan" });
  let cus = await Customer.findOne({ name: "mohan" });

  console.log(cus);

  // let newOrder = new Order({
  //   item: "Milk cake",
  //   price: 210,
  // });

  // cus.orders.push(newOrder);

  // await cus.save();
  // await newOrder.save();
  // console.log(newOrder, "newOrder", cus, "cus");
  // console.log("added new customer");
};

let delCus = async () => {
  let del = await Customer.findByIdAndDelete({
    _id: "656627f273340a7079b1407f",
    new: true,
  });
  console.log(del, "del deleted");
};

delCus();

// addCustomer();
