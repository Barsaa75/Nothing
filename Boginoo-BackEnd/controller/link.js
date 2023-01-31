import Link from "../model/link.js";

export const getAlllinks = async (req, res) => {
  try {
    // const limit = req.query.limit;
    // const skip = req.query.skip;
    // const link = await Link.find({}).limit(limit).skip(skip);
    res.status(200).send({
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createlink = async (req, res) => {
  try {
    const link = await Link.create(req.body);
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const findlink = async (req, res) => {
  try {
    const { params } = req.params;
    const link = await Link.findOne({
      ShortUrl: params,
    });
    res.status(200).send({
      success: true,
      data: link,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const superDelete = async (req, res) => {
  try {
    const { _id } = req.params;
    const url = await Link.findByIdAndRemove(_id);
    res.status(200).send({
      success: true,
      data: url,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
