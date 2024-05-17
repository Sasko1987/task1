const mongoose = require("mongoose");

const universitiesSchema = mongoose.Schema({
  ime: { type: String, required: true },
  adresa: { type: String, required: true },
  fakulteti: [
    {
      ime: { type: String, required: true },
      adresa: { type: String, required: true },
    },
  ],
});

const University = mongoose.model(
  "University",
  universitiesSchema,
  "Universities"
);

const updateFaculty = async (id, data) => {
  return await University.updateOne({ _id: id }, data);
};

const removeFaculty = async (id) => {
  return await University.deleteOne({ _id: id });
};

const listFaculty = async () => {
  return await University.find();
};

module.exports = {
  updateFaculty,
  removeFaculty,
  listFaculty,
};
