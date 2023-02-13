import Post from "./Post.js";
import fileService from "./fileService.js";
class PostService {
    async create (post, picture) {
            const fileName = fileService.saveFile(picture);
            post.picture = fileName;
            const createdPost = await Post.create({...post, });
            return createdPost;
    }

    async getAll () {
            const posts = await Post.find();
            return posts;
    }

    async getOne (id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update (post) {
            if (!post._id) {
                throw new Error('Не указан ID')
            }
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return updatedPost;

    }

    async delete (id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
}

export default new PostService();