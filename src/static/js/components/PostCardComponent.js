import {getExcerpt} from "../helpers/commonFunc";

export default class PostCardComponent {

    getBodyExcerpt(text) {
        return `${getExcerpt(text, 159)}...`;
    }

    createCard(post, userData) {

        const {title, body} = post;
        const {firstName, lastName, company, image} = userData;
        return `<div class="card column">
    <h3 class="title title--m-size title--green">${title}</h3>
    <p class="paragraph card__content">
        <span class="c-icon c-icon--small" style="background-image: url('./static/images/icon.png')"></span>
        ${this.getBodyExcerpt(body)}
    </p>
    <div class="row user-info">
        <div class="user-info__image">
            <img src=${image} alt=""/>
        </div>
        <div class="user-info__about column">
            <span class="title title--bold">${firstName} ${lastName}</span>
            <span class="paragraph user-info__about__profession">${company.title}</span>
        </div>
    </div>
</div>`
    }
}