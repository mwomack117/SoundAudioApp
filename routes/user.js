const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const Sounds = require("../database/models/sound");
const passport = require("../passport");

router.post("/", (req, res) => {
  console.log("user signup");

  const {
    name,
    username,
    password
  } = req.body;
  // ADD VALIDATION
  User.findOne({
    username: username
  }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        name: name,
        username: username,
        password: password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post("/sound/:userId", (req, res) => {
  console.log("save sound");
  console.log(req.body);
  console.log(req.params.userId);
  const newSound = new Sounds({
    soundId: req.body.soundId,
    preview: req.body.preview,
    user_id: req.params.userId,
    name: req.body.name,
    image: req.body.image
  });
  newSound.save((err, savedSound) => {
    console.log(err);

    if (err) return res.json(err);
    res.json(savedSound);
  });
});

// Delete saved Sound
router.get("/sound/delete/:soundId", (req, res) => {
  console.log(req.params.soundId);
  Sounds.findByIdAndRemove(req.params.soundId, (err, sound) => {
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
      message: "Sound successfully deleted",
      id: req.params.soundId
    };
    return res.status(200).send(response);
  })
});

router.get("/saved/:userId", (req, res) => {
  console.log("worx");
  console.log(req.params.userId);
  Sounds.find({
    user_id: req.params.userId
  }).then(data => {
    res.send(data);
  });
});

router.post(
  "/login",
  function (req, res, next) {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("POST to /login", req.user);
    var userInfo = {
      username: req.user.username,
      _id: req.user._id,
      name: req.user.name
    };
    res.send(userInfo);
  }
);

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({
      user: req.user
    });
  } else {
    res.json({
      user: null
    });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({
      msg: "logging out"
    });
  } else {
    res.send({
      msg: "no user to log out"
    });
  }
});

module.exports = router;