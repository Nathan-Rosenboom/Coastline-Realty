const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subbmissionSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: "Enter first name"
        },

        lastName: {
            type: String,
            trim: true,
            required: "Enter last name"
        },

        mobile: {
            type: String,
            trim: true,
            required: "Enter mobile number"
        },

        email: {
            type: String,
            trim: true,
            required: "Enter email"
        },

        address: {
            type: String,
            trim: true,
            required: "Enter address"
        }
    }
);

const Submission = mongoose.model("Submission", subbmissionSchema);

module.exports = Submission;