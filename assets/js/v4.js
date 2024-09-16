// ================ REVIEW SLIDER CARD DATA
const reviews = [
    {
        title: "Michael Chen",
        stars: "./assets/images/success-story/slide-stars.svg",
        invested: 350,
        profit: 4891,
        description:
            "The AI Arbitrage method is incredible! It helped me make significant profits quickly and effortlessly. My account manager was always there to support me every step of the wayThe AI Arbitrage method...",
        imageUrl: "./assets/images/arbitrage-winner/michael-chen-profile.webp",
    },
    {
        title: "Jennifer Wilson",
        stars: "./assets/images/success-story/slide-stars.svg",
        invested: 2000,
        profit: 1368.23,
        description:
            "This method is a game-changer! I’ve seen amazing returns on my investments.",
        imageUrl: "./assets/images/arbitrage-winner/jenifer.webp",
    },
    {
        title: "Robert Thompson ",
        stars: "./assets/images/success-story/slide-stars.svg",
        invested: 30000,
        profit: 8126,
        description:
            "AI Arbitrage made trading so simple and profitable. My account manager was always ready to help and provide valuable insights. Highly recommend it!",
        imageUrl: "./assets/images/arbitrage-winner/robert.webp",
    },
    {
        title: "Elizabeth Brown",
        stars: "./assets/images/success-story/slide-stars.svg",
        invested: 350,
        profit: 5236.73,
        description:
            "This method is a game-changer! I’ve seen amazing returns on my investments.",
        imageUrl: "./assets/images/arbitrage-winner/elixabeth.webp",
    },
    {
        title: "David Clark",
        stars: "./assets/images/success-story/slide-stars.svg",
        invested: 5000,
        profit: 3274.5,
        description:
            "The AI Arbitrage system is fantastic. It’s helped me achieve impressive profits effortlessly.",
        imageUrl: "./assets/images/arbitrage-winner/devon-lane-profile.webp",
    },
    {
        title: "Michelle Wright",
        stars: "./assets/images/success-story/slide-stars.svg",
        invested: 50000,
        profit: 18156,
        description:
            "I love the AI Arbitrage method! My account manager provided excellent support, making the process smooth and profitable. It’s reliable, efficient, and highly profitable",
        imageUrl: "./assets/images/arbitrage-winner/michelle.webp",
    },
    {
        title: "Christopher Harris",
        stars: "./assets/images/success-story/slide-stars.svg",
        invested: 350,
        profit: 5207,
        description:
            "AI Arbitrage has made my trading experience so much better. The support from my account manager was exceptional. Great profits in no time!",
        imageUrl: "./assets/images/arbitrage-winner/christopher.webp",
    },
    // {
    //     title: "Sarah Martin",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 3500,
    //     profit: 2275,
    //     description:
    //         "This method is outstanding. It’s easy to use and delivers consistent profits.",
    //     imageUrl: "./assets/images/arbitrage-winner/sarah.webp",
    // },
    // {
    //     title: "Daniel Taylor",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 60000,
    //     profit: 23451,
    //     description:
    //         "AI Arbitrage has transformed my trading game. My account manager was always available for guidance and support. Highly recommend it for anyone looking to profit.",
    //     imageUrl: "./assets/images/arbitrage-winner/daniel.webp",
    // },
    // {
    //     title: "William Thompson",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 350,
    //     profit: 7155,
    //     description:
    //         "Amazing! The AI Arbitrage method is the easiest way to earn substantial profits. The assistance from my account manager made a big difference.",
    //     imageUrl: "./assets/images/arbitrage-winner/ralph-profile.webp",
    // },
    // {
    //     title: "Andrew Young",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 10000,
    //     profit: 7562.5,
    //     description:
    //         "AI Arbitrage has been a game changer for me. The profits are incredible!",
    //     imageUrl: "./assets/images/arbitrage-winner/andrew.webp",
    // },
    // {
    //     title: "Catherine Miller",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 35000,
    //     profit: 10153,
    //     description:
    //         "This method is so efficient and profitable. My account manager was instrumental in my success. I’m very pleased with the results",
    //     imageUrl: "./assets/images/arbitrage-winner/catherine.webp",
    // },
    // {
    //     title: "Brian Scott",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 350,
    //     profit: 9728,
    //     description:
    //         "AI Arbitrage is simply the best. It’s helped me achieve fantastic returns on my investments.",
    //     imageUrl: "./assets/images/arbitrage-winner/brian.webp",
    // },
    // {
    //     title: "Nancy Walker",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 4200,
    //     profit: 2940,
    //     description:
    //         "I’ve never seen such quick and easy profits. AI Arbitrage is a must-try for any trader.",
    //     imageUrl: "./assets/images/arbitrage-winner/nancy.webp",
    // },
    // {
    //     title: "Stephen White",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 70000,
    //     profit: 25378,
    //     description:
    //         "Absolutely love AI Arbitrage! It’s efficient, effective, and highly profitable.",
    //     imageUrl: "./assets/images/arbitrage-winner/esther-profile.webp",
    // },
    // {
    //     title: "Rebecca Hall",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 350,
    //     profit: 1589,
    //     description:
    //         "This method has made trading so much easier and more profitable for me. The support from my account manager was invaluable..",
    //     imageUrl: "./assets/images/arbitrage-winner/rabecca.webp",
    // },
    // {
    //     title: "Matthew King",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 7800,
    //     profit: 5460,
    //     description:
    //         "AI Arbitrage is fantastic! I’ve seen significant returns in a very short time.",
    //     imageUrl: "./assets/images/arbitrage-winner/mathew.webp",
    // },
    // {
    //     title: "Sophia Lee",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 45000,
    //     profit: 16659.4,
    //     description:
    //         "Profits have been rolling in thanks to AI Arbitrage. The help from my account manager was crucial in making the most out of my trades. It’s a brilliant method.",
    //     imageUrl: "./assets/images/arbitrage-winner/sophia.webp",
    // },
    // {
    //     title: "Paul Moore",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 350,
    //     profit: 8327,
    //     description:
    //         "This method is superb. It’s easy to use and delivers consistent profits.",
    //     imageUrl: "./assets/images/arbitrage-winner/paul.webp",
    // },
    // {
    //     title: "Lisa Campbell",
    //     stars: "./assets/images/success-story/slide-stars.svg",
    //     invested: 6000,
    //     profit: 3846,
    //     description:
    //         "AI Arbitrage has revolutionized my trading strategy. The support from my account manager was exceptional. Highly recommend it.",
    //     imageUrl: "./assets/images/arbitrage-winner/lisa.webp",
    // },
];
// Function to generate a review card
function generateReviewCard(review) {
    return `
    <div class="swiper-slide">
      
    <div class="slider_gradient_border">
      <div class="slider_box mx-auto">
      <div class="d-flex flex-column  justify-start  gap_24">
        <div class="d-flex flex-column justify-start gap-1">
        <img class="slider_profile_img rounded-pill position-absolute object-fit-cover" sizes="100vw"
           src="${review.imageUrl}" alt="${review.title}">
        <div class="d-flex justify-content-between pt-5">
          <div class="w_121">
            <p class="fw-semibold ff_roboto text-white mb-0 text-nowrap">${review.title}</p>
            <div class="">    <img src="./assets/images/arbitrage-winner/review-star.svg" alt="review-star"></div>
          </div>
              <div class="">
                  <p class="ff_roboto mb-0 fw_900 fs_base leading_150 text-white">Invested<span class="text_white_gray opacity_slider  fw-medium"> 350 CAD </span></p>
                  <p class="ff_roboto mb-0 fw_900 fs_base leading_150 text-white">Profit:<span class="text_white_gray opacity_slider  fw-medium"> 3,784 CAD </span></p>
                </div>
        </div>
            <div class="mt-1">
                <div class="d-flex flex-column justify-content-between">
                    <div>
                     <p  class="ff_roboto leading_150 fs_base text-white fw-bold opacity_slider mb-0">Review</p>
                      </div>
                    </div>
                    <p class="leading_150 fs_base text-white opacity_slider mt-3 mb-0"> <span class="opacity_slider">${review.description}</span></p>
                  </div>
                </div>
      </div>
        </div>
    </div>
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
