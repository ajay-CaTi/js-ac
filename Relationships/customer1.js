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

//MODEL
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
  let res = await Customer.find().populate("orders");
  console.log(res[0]);
};

findCustomer();
