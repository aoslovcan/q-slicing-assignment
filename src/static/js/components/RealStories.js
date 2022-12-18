import {PostClient} from "../api/PostClient";

export default class RealStories{
    init(){
        const postClient = new PostClient();
        postClient.getPosts().then((res) => console.log(res.posts))
    }
}