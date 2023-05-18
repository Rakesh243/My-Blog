const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogControllers");

router.get("/", blogController.blogList);

router.post("/", blogController.blogCreatePost);

router.get("/create", blogController.blogCreateGet);

router.get("/:id", blogController.blogDetails);

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
