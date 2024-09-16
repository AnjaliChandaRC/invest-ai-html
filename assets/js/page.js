// ================ REVIEW SLIDER CARD DATA
const reviews = [
    {
        title: "Michael Chen",
        invested: 350,
        profit: 4891,
        description:
            "The AI Arbitrage method is incredible!. My account manager was always every step of the wayThe AI Arbitrage method.",
        imageUrl: "./assets/images/arbitrage-winner/michael-chen-profile.webp",
    },
    {
        title: "Christopher Harris",
        invested: 350,
        profit: 5207,
        description:
            "AI Arbitrage has made my trading experience so much better. The support from my account manager was exceptional. Great profits in no time!",
        imageUrl: "./assets/images/arbitrage-winner/christopher.webp",
    },
    {
        title: "Robert Thompson ",
        invested: 30000,
        profit: 8126,
        description:
            "AI Arbitrage made trading so simple and profitable. My account manager  always ready to help and provide valuable insights. Highly recommend it!",
        imageUrl: "./assets/images/arbitrage-winner/robert.webp",
    },
    {
        title: "David Clark",
        invested: 5000,
        profit: 3274.5,
        description:
            "The AI Arbitrage system is fantastic. It’s helped me achieve impressive profits effortlessly.",
        imageUrl: "./assets/images/arbitrage-winner/devon-lane-profile.webp",
    },
    {
        title: "Paul Moore",
        invested: 350,
        profit: 8327,
        description:
            "This method is superb. It’s easy to use and delivers consistent profits.",
        imageUrl: "./assets/images/arbitrage-winner/paul.webp",
    },
    {
        title: "Lisa Campbell",
        invested: 6000,
        profit: 3846,
        description:
            "AI Arbitrage has revolutionized my trading strategy. The support from my account manager was exceptional. Highly recommend it.",
        imageUrl: "./assets/images/arbitrage-winner/lisa.webp",
    },
    {
        title: "David Clark",
        invested: 5000,
        profit: 3274.5,
        description:
            "The AI Arbitrage system is fantastic. It’s helped me achieve impressive profits effortlessly.",
        imageUrl: "./assets/images/arbitrage-winner/devon-lane-profile.webp",
    },
];
// Function to generate a review card
function generateReviewCard(review) {
    return `
    <div class="swiper-slide">
    <div class="slider_green_box bg-white slider_card">
        <div class="d-flex flex-row flex_xsm_col align-items-start justify-content-between mt-23">
            <div class="d-flex align-items-center gap-2">
                <img class="slider_profile_img rounded-pill object-fit-cover" sizes="100vw"
                    src="${review.imageUrl}" alt="${review.title}">
                <div class="ms-1">
                    <h2 class="text-black fw-semibold fs_base leading_130 mb-0">${review.title
        }</h2>
                    <img src="./assets/images/arbitrage-winner/review-star.svg" alt="review-star">
                </div>
            </div>
                    <div class="mt-sm-0 review_slider_parent">
                        <p class="mb-0 opacity_07 leading_150 fw-bold fs_base text-nowrap text-black">Invested <span class="text-black text-nowrap fw_800">${review.invested.toLocaleString()} CAD</span></p>
                        <p class="mb-0 opacity_07 leading_150 fw-bold fs_base text-nowrap text-black">Profit: <span class="text-black text-nowrap fw_800">${review.profit.toLocaleString()} CAD</span></p>
                    </div>
           </div>
        <p class="leading_150 fs_base text-black opacity_07 pt-sm-4 mt-sm-1 mt-3 mb-0"><span class="fw-bold">Review</span> ${review.description
        }</p></div>
    </div>
`;
}
// Function to render the review cards
function renderReviewCards() {
    const reviewSlider = document.getElementById("review-slider");
    reviewSlider.innerHTML = reviews.map(generateReviewCard).join("");
}
// Call the function to render the review cards
renderReviewCards();
