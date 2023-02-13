import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    picture: { type: String }
    // author: {type: String, required:true},
    // title: {type: String, required:true},
    //content: {type: String, required:true},
    //picture: {type: String}
});

export default mongoose.model('Post', Post);