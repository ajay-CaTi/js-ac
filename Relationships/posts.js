const mongoose = require("mongoose");

const { Schema } = mongoose;
main()
  .then((res) => console.log("Db connected"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
// SCHEMA
const userSchema = new Schema({ userName: String, email: String });

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

//MODEL
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  // let user1 = new User({ userName: "munna", email: "munna123@gmail.com" });
  // let uu = await user1.save();
  // console.log(uu);

  // let user1 = await User.findOne({ userName: "munna" });
  // console.log(user1);
  // let post2 = new Post({
  //   content: "lets begin holiday",
  //   likes: 40,
  // });
  // post2.user = user1;
  // let pp = await post2.save();
  // console.log(pp);

  let res = await Post.find().populate("user");
  console.log(res);
};
addData();
