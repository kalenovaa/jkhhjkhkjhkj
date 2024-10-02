const heroCards = document.querySelector('.hero_cards');
const asyncData = async () => {
    const response = await fetch('data/newCollection.json');
    const data = await response.json();

    data.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card_hero';
        card.innerHTML = `
        <div class="hero_images">
            <img src="${item.images}" alt="">
            <div class="hero_absolut">
                <div class="hero_images_title">
                    <p>${item.item}</p>
                    <span>${item.boots}</span>
                </div>
                <img src="${item.heart}" alt="">
            </div>
        </div>
        <h5>${item.title}</h5>
        <div class="price_done">
            <strong>${item.price}</strong>
            <span>${item.done}</span>
        </div>
        `;
        heroCards.appendChild(card);
    });

    const staticCard = heroCards.querySelector('.invid_card_hero');
    heroCards.appendChild(staticCard);
};

asyncData();



const saleCards = document.querySelector('.sale_cards');
const asyncDataSale = async () => {
    const response = await fetch('data/newCollectionSale.json');
    const data = await response.json();

    data.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card_hero';
        card.innerHTML = `
        <div class="hero_images">
            <img src="${item.images}" alt="">
            <div class="hero_absolut">
                <div class="hero_images_title">
                    <p>${item.item}</p>
                    <span>${item.boots}</span>
                </div>
                <img src="${item.heart}" alt="">
            </div>
        </div>
        <h5>${item.title}</h5>
        <div class="sale_price">
            <div class="sale_price_line">
                <img src="${item.line}" alt="">
                <div>8500</div>
            </div>
            <strong>${item.price}</strong>
        </div>
        `;

        if (item.done) {
            const spanElement = document.createElement('span');
            spanElement.textContent = item.done;
            spanElement.style.cssText = `
                width: 70px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(59, 170, 233, 1);
                font-family: SF Pro Display;
                font-size: 13px;
                font-weight: 600;
                line-height: 13.54px;
                text-align: center;
                color: white;
            `;
            card.querySelector('.sale_price').appendChild(spanElement);
        }

        saleCards.appendChild(card);
    });

    const staticCard = saleCards.querySelector('.invid_card_sale');
    saleCards.appendChild(staticCard);
};

asyncDataSale();

const meBlogBottom = document.querySelector('.me_blog_bottom')
const asyncMeBlogData = async () => {
    const response = await fetch("data/meBlog.json");
    const data = await response.json();
    data.forEach((item) => {
        const cardBlog = document.createElement('div');
        cardBlog.className = 'card_blog';
        cardBlog.innerHTML = `
            <img src="${item.images}" alt="">
            <span>${item.title}</span>
            <p>${item.date}</p>

        `
        meBlogBottom.append(cardBlog)

    })
}
asyncMeBlogData()