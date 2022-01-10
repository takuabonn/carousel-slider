// 画像ブロックを取得
const slideImgEls = document.querySelectorAll(".slide_img");

// 無限ループのために最初の画像と最後の画像のクローンを作成
const clonedFirstImgEl = slideImgEls[0].cloneNode(true);
const clonedLastImgEl = slideImgEls[`${slideImgEls.length - 1}`].cloneNode(
    true
);
clonedFirstImgEl.children[0].id = "first-image";
clonedLastImgEl.children[0].id = "last-image";

// 作成したクローンを画像ブロックに挿入
const slideShowEl = document.querySelector(".slide_show");
slideShowEl.append(clonedFirstImgEl);
slideShowEl.prepend(clonedLastImgEl);

let count = 1;

// 現在は最後の画像のクローンが一番先頭の要素なので初期表示で一個ずらしてクローンじゃない最初の画像を表示
let imageWide = clonedFirstImgEl.children[0].clientWidth;
slideShowEl.style.transform = `translate3d(-${imageWide}px,0,0)`;

// 画面サイズを変更した際の画像幅を取得そうしないと最初の画面幅の時の画像の幅で固定になってしまう
window.addEventListener("resize", () => {
    imageWide = clonedFirstImgEl.children[0].clientWidth;
});

const newSlideImgEls = document.querySelectorAll(".slide_img");
setInterval(() => {
    slideShowEl.style.transform = `translate3d(-${imageWide * count}px, 0, 0)`;
    slideShowEl.style.transition = "transform 1s ease";
    if (newSlideImgEls.length === count) {
        count = 1;
        slideShowEl.style.transition = "none";
        slideShowEl.style.transform = `translate3d(-${imageWide * count}px, 0, 0)`;
        return;
    }
    count = count + 1;
}, 1000);