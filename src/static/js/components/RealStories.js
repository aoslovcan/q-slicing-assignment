import { PostClient } from "../api/PostClient";
import { UserClient } from "../api/UserClient";
import PostCardComponent from "./PostCardComponent";
import Loader from "./Loader";

export default class RealStories {
  postClient = new PostClient();
  userClient = new UserClient();
  loader = new Loader();
  postCardComponent = new PostCardComponent();
  postsData = [];
  userInfo = [];
  mobileView = 1060;

  init() {
    this.getPostsData();
  }

  getPostsData() {
    this.loader.startLoading(".c-real-stories");
    this.postClient.fetchPosts().then((res) => {
      document.querySelector(".loading").style.display = "none";
      this.mobileViewController();
      this.saveData(res.posts, "post");
      this.getUsersInfoByIds();
      this.loader.stopLoading();
    });
  }

  saveData(data, name) {
    const selector = {
      post: {
        toDo: () => {
          this.postsData.push(data);
        },
      },
      user: {
        toDo: () => {
          this.userInfo.push(data);
          this.render();
        },
      },
    };
    selector[name].toDo();
  }

  getUsersInfoByIds() {
    let ids = this.postsData[0].map(({ userId }) => userId);
    Promise.allSettled(ids.map((id) => this.userClient.getUserById(id))).then(
      (res) => {
        let data = res.map(({ value }) => value);
        this.saveData(data, "user");
      }
    );
  }

  realStoriesTitle() {
    return `
        <div class="c-real-stories__title">
                <div class="c-icon c-icon--big" style="background-image: url('./static/images/icon.png')">
                </div>
                <div class="front column">
                    <h1 class="title title--medium">Real Stories from Our Staff</h1>
                    <p class="paragraph">Be inspired with these experiences.</p>
                </div>
        </div>
        `;
  }

  mobileViewController() {
    window.addEventListener("load", () => {
      this.render(window.innerWidth);
    });
    window.addEventListener("resize", (event) => {
      this.render(window.innerWidth);
    });
  }

  render(width) {
    let posts = this.postsData[0];
    let users = this.userInfo[0];
    let firstPost = posts[0];
    let restPosts = posts.slice(1);
    let firstUser = users.filter(({ id }) => id === firstPost.userId);
    let realStoriesFirst = document.querySelector(".c-real-stories__first");
    let realStoriesSecond = document.querySelector(".c-real-stories__second");

    realStoriesSecond.innerHTML = ``;
    realStoriesFirst.innerHTML = ``;

    if (width <= this.mobileView) {
      realStoriesFirst.innerHTML += ` 
            ${this.realStoriesTitle()}
          `;
      this.postsData[0].map((post) => {
        let user = users.filter(({ id }) => id === post.userId);
        realStoriesSecond.innerHTML += this.postCardComponent.createCard(
          post,
          user[0]
        );
      });
      return;
    }

    realStoriesFirst.innerHTML += ` 
            ${this.realStoriesTitle()}
            ${this.postCardComponent.createCard(firstPost, firstUser[0])}
          `;

    restPosts.map((post) => {
      let user = users.filter(({ id }) => id === post.userId);
      realStoriesSecond.innerHTML += this.postCardComponent.createCard(
        post,
        user[0]
      );
    });
  }
}
