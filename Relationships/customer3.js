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

// Middleware

customerSchema.post("findOneAndDelete", async (orderData) => {
  console.log(orderData, "post middleware");
  if (orderData.orders.length) {
    let result = await Order.deleteMany({ _id: { $in: orderData.orders } });
    console.log(result);
  }
});

//MODEL
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
  let res = await Customer.find().populate("orders");
  console.log(res[0]);
};

// findCustomer();

const createCustomer = async () => {
  //   let cus1 = new Customer({ name: "vaishali mann" });
  //   let c = await cus1.save();
  //   console.log(c);

  //   let cust = await Customer.findOne({ name: "vaishali mann" });
  //   console.log(cust);
  //   let order1 = new Order({ item: "dal makhni", price: 222 });
  //   let order2 = new Order({ item: "makkhan", price: 555 });
  //   cust.orders.push(order1);
  //   cust.orders.push(order2);
  //   let o = await order1.save();
  //   let t = await order2.save();
  //   let c = await cust.save();
  //   console.log(o, t, c);

  let data = await Order.findById({ _id: "656b772041cac5dc82094600" });
  console.log(data);
};
// createCustomer();

const delCus = async () => {
  let dd = await Customer.findByIdAndDelete({
    _id: "656b77003485890b301fe1db",
  });
  console.log(dd, "deleted");
};

// delCus();
