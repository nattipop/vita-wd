if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const keys = require("../config/keys")

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect(keys.dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", error => console.log(error))
db.once("open", () => console.log("connected to database"));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const { BlogPost, Plan, ClientEmail } = require("./models");
const emails = require("./email");

// test
app.get("/api", (req, res) => {
  res.json({"users": ["one", "two", "three", "four", "twelve"]})
})
// fetch posts
app.get("/api/posts", (req, res) => {
  BlogPost.find({}, (err, posts) => {
    if(err){
      res.status(500).send("there was an error with your request's format")
      throw err;
    }

    if(!posts){
      res.status(404).send("search came back negative")
    }

    res.status(200).send(posts)
  })
})
// fetch post by id
app.get("/api/post/:_id", (req, res) => {
  const {_id} = req.params;
  if(!_id) {
    res.status(400).send("incorrect request params")
  }

  BlogPost.find({"_id": _id}, (err, post) => {
    if(err) {
      res.status(500).send("there was a problem finding that post")
      throw err;
    }

    res.status(200).send(post)
  })
})
// fetch all plans
app.get("/api/plans", (req, res) => {
  Plan.find({}, (err, plans) => {
    if(err){
      res.status(500).send("there was an error with your request's format")
      throw err;
    }

    if(!plans){
      res.status(404).send("search came back negative")
    }

    res.status(200).send(plans)
  })
});
// post a plan!
app.post("/api/plans", (req, res) => {
  if(req.body) {
    const plan = new Plan({
      plan_name: req.body.plan_name,
      description: req.body.description,
      price: req.body.price,
      features: req.body.features,
      icon_url: req.body.icon_url
    });

    plan.save((err) => {
      if(err) {return next(err)}

      res.status(200).send("added plan!")
    })
  } else {
    res.status(400).send("incorrect data formatting")
  }
})
// post a new blog post
app.post("/api/new-post", (req, res) => {
  if(req.body) {
    const d = new Date();

    const date = d.toDateString();
    const time = d.toLocaleTimeString();

    const post = new BlogPost({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      content: req.body.content,
      cover_image_src: req.body.cover_img_src,
      time_stamp: `${date} @${time}`
    })

    post.save((err, post) => {
      if (err) { return next(err) }

      res.status(200).send("posted!")
    })
  } else {
    res.status(400).send("Incorrect data formatting")
  }
});

// send an email
app.post("/api/new-email", (req, res) => {
  if(req.body) {
    emails.sendEmail(req.body.fName, req.body.lName, req.body.clientEmail, req.body.business, req.body.service, req.body.haveWebsite, req.body.haveDomain);

    const client = new ClientEmail({
      first: req.body.fName,
      last: req.body.lName,
      email: req.body.clientEmail,
      business: req.body.business,
      service: req.body.service,
      website: req.body.haveWebsite,
      domain: req.body.haveDomain
    })

    client.save((err) => {
      if(err) { return next(err) }

      res.status(200).send("Successfully added to database")
    })
  } else {
    res.status(400).send("Incorrect data formatting")
  }
})

app.listen(process.env.PORT || 5000, () => console.log("Server running on port 5000"))