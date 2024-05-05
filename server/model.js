import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    data: {
        type: String
    }
});

const DataModel = mongoose.model('Data', DataSchema);

export default DataModel;
