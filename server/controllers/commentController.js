const Note = require("../models/Notes");
const Comment = require("../models/Comment");
const mongoose = require("mongoose");

exports.comment = async (req, res) => {
  let perPage = 12;
  let page = req.query.page || 1;
  const locals = {
    title: "Dashboard",
    description: "CRUD Thoughts App.",
  };
  try {
    const comments = await Comment.aggregate([
      { $sort: { updatedAt: -1 } },
      { $match: { user: mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          comment: { $substr: ["$comment", 0, 100] },
        },
      },
    ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();
    const count = await Comment.count();
    res.render("dashboard/index", {
      userName: req.user.firstName,
      locals,
      comments,
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
  }
};


exports.dashboardViewComment = async (req, res) => {
  try {
    const comment = await Comment.findById({ _id: req.params.id })
      .where({ _id: req.params.id })
      .lean();

    if (comment) {
      res.render("dashboard/view-comment", {
        noteID: req.params.id,
        comment,
        commentID: req.params.id,
        layout: "../views/layouts/dashboard",
      });
    } else {
      res.send("Something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
};

exports.dashboardUpdateComment = async (req, res) => {

  let thisCOMMENT = req.params.id;
  try {
    await Comment.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, comment: req.body.comment, updatedAt: Date.now() }
    ).where({ _id: thisCOMMENT });
    res.redirect(`/comments/item/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardDeleteComment = async (req, res) => {
  
  try {
    await Comment.deleteOne({ _id: req.params.id }).where({ _id : req.params.id });
    res.redirect(`/dashboard`);
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardAddComment = async (req, res) => {
  try {
    const note = await Note.findById({ _id: req.params.id })
      .where({ user: req.user._id })
      .lean();

      if (note) {
        res.render("dashboard/addComment", {
          noteID: req.params.id,
          commentID: note._id,
          note,
          layout: "../views/layouts/dashboard",
        });
      } else {
        res.send("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
};

exports.dashboardAddCommentSubmit = async (req, res) => {
  
  try {
    req.body.user = req.params.id
    const comment = await Comment.create(req.body);
    if (comment) {
      res.render("dashboard/view-comment", {
        noteID: req.params.id,
        comment,
        commentID: req.params.id,
        layout: "../views/layouts/dashboard",
      });
    } else {
      res.send("Something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
};

