var foodList = [
  {
    title: "Beef Tacos",
    image: "EXPS_TOHD24_188896_EricKleinberg_7.jpg",
    desc: "Flavorful Mexican tacos with seasoned ground beef",
    Extended_Preparation_time: "True",
  },

  {
    title: "Chicken Alfredo Pasta",
    image: "Chicken Alfredo.jfif",
    desc: "Creamy Alfredo pasta with grilled chicken and parmesan cheese",
    Extended_Preparation_time: "False",
  },

  {
    title: "Margherita Pizza",
    image: "pizza.jpg",
    desc: "Classic Italian pizza topped with mozzarella and fresh basil",
    Extended_Preparation_time: "True",
  },

  {
    title: "Grilled Salmon",
    image: "images.jfif",
    desc: "Juicy grilled salmon served with lemon butter sauce",
    Extended_Preparation_time: "False",
  },

  {
    title: "Vegetable Stir Fry",
    image: "Vegetable Stir Fry.jfif",
    desc: "Fresh vegetables stir-fried in a savory soy garlic sauce",
    Extended_Preparation_time: "False",
  },

  {
    title: "Cheese Burger",
    image: "Cheese Burger.jfif",
    desc: "Classic beef burger loaded with cheddar cheese and fresh veggies",
    Extended_Preparation_time: "False",
  },

  {
    title: "Butter Chicken",
    image: "Butter Chicken.jfif",
    desc: "Rich and creamy Indian butter chicken with aromatic spices",
    Extended_Preparation_time: "True",
  },

  {
    title: "Caesar Salad",
    image: "Caesar Salad.jfif",
    desc: "Crisp romaine lettuce with Caesar dressing and croutons",
    Extended_Preparation_time: "False",
  },

  {
    title: "Shrimp Fried Rice",
    image: "Shrimp Fried Rice.webp",
    desc: "Asian-style fried rice with shrimp and mixed vegetables",
    Extended_Preparation_time: "False",
  },
];
function RandomContent() {
  var randomPosition = Math.trunc(Math.random() * foodList.length);
  var main = document.getElementById("main-container").innerHTML = `  <div
          class="main-content bg-info rounded-5 mb-3 bg-white row overflow-hidden"
        >
          <!-- card image -->
          <div class="left col-lg-5 p-0">
            <div class="inner w-100 h-100 position-relative">
              <img
                src="./images/${foodList[randomPosition].image}"
                alt="..."
              />
              <div class="layer position-absolute top-0 start-0 end-0 bottom-0">
                <div
                  class="rounded-pill px-3 py-2 bg-white position-absolute top-0 mt-4 ms-4 shadow-sm"
                >
                  <i class="fas fa-star text-warning"></i>
                  <p class="d-inline-block ps-2 fw-semibold">
                    4.8 <span class="text-gray fw-normal">(445 reviews)</span>
                  </p>
                </div>
                <div
                  class="bottom-of-layer rounded-4 p-4 position-absolute start-0 end-0 text-center bg-white mx-auto d-flex justify-content-around shadow-lg"
                >
                  <div class="d-flex flex-column align-items-center">
                    <i class="fas fa-clock text-main fs-4"></i>
                    <span class="text-gray">prep Time</span>
                    <span class="fw-bold">20 min</span>
                  </div>
                  <div class="d-flex flex-column align-items-center">
                    <i class="fas fa-fire-burner text-danger fs-4"></i>
                    <span class="text-gray">Cook Time </span>
                    <span class="fw-bold">15 min </span>
                  </div>
                  <div class="d-flex flex-column align-items-center">
                    <i class="fas fa-users text-primary fs-4"></i>
                    <span class="text-gray">Servings </span>
                    <span class="fw-bold">2 people </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- right of Card -->
          <div class="right col-lg-7 h-100 overflow-y-auto">
            <div class="inner p-4">
              <!-- top -->
              <div
                class="d-flex justify-content-between align-items-center gap-3 mb-3"
              >
                <div>
                  <div class="d-flex gap-2 mb-3">
                    <span
                      class="badge rounded-pill text-success bg-success-subtle px-3 py-2"
                    >
                      Easy
                    </span>

                    <span
                      class="badge rounded-pill text-primary bg-primary-subtle px-3 py-2"
                    >
                      American
                    </span>
                  </div>
                  <h1 class="fw-bold fs-1 mb-2">${foodList[randomPosition].title}</h1>
                  <p class="text-secondary fs-5">
                    ${foodList[randomPosition].desc}
                  </p>
                </div>

                <div class="d-flex gap-3">
                  <button class="action-btn border-0 rounded-4">
                    <i class="fas fa-bookmark"></i>
                  </button>

                  <button class="action-btn border-0 rounded-4">
                    <i class="fas fa-share-nodes"></i>
                  </button>
                </div>
              </div>
              <div
              id="Alert"
                class="alert text-danger d-flex align-items-center gap-3 rounded-4"
                role="alert"
              >
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div>
                  <h2 class="fs-6 m-0">Extended Preparation Time</h2>
                  <p class="text-sm">
                    This recipe requires more than 45 minutes to prepare. Plan
                    accordingly!
                  </p>
                </div>
              </div>
              <!-- tabs -->
              <ul
                class="nav nav-tabs recipe-tabs justify-content-between mt-3 border-bottom border-1 border-light-subtle pb-3"
                id="recipeTabs"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="ingredients-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#ingredients"
                    type="button"
                    role="tab"
                  >
                    <i class="fa-solid fa-list-check"></i>
                    Ingredients
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="instructions-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#instructions"
                    type="button"
                    role="tab"
                  >
                    <i class="fa-solid fa-book-open"></i>
                    Instructions
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="nutrition-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nutrition"
                    type="button"
                    role="tab"
                  >
                    <i class="fa-solid fa-chart-pie"></i>
                    Nutrition
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="tips-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tips"
                    type="button"
                    role="tab"
                  >
                    <i class="fa-solid fa-lightbulb"></i>
                    Chef's Tips
                  </button>
                </li>
              </ul>

              <!-- Tabs Content -->
              <div class="tab-content pt-4">
                <!-- ingredients -->
                <div
                  class="ingredient-box p-4 mt-2 tab-pane fade show active"
                  id="ingredients"
                  role="tabpanel"
                >
                  <div class="d-flex align-items-center mb-3">
                    <div
                      class="ingredient-number d-flex justify-content-center align-items-center me-3"
                    >
                      1
                    </div>
                    <h6 class="mb-0 text-secondary">500g ground beef</h6>
                  </div>

                  <div class="d-flex align-items-center mb-3">
                    <div
                      class="ingredient-number d-flex justify-content-center align-items-center me-3"
                    >
                      2
                    </div>
                    <h6 class="mb-0 text-secondary">8 taco shells</h6>
                  </div>

                  <div class="d-flex align-items-center mb-3">
                    <div
                      class="ingredient-number d-flex justify-content-center align-items-center me-3"
                    >
                      3
                    </div>
                    <h6 class="mb-0 text-secondary">1 onion, diced</h6>
                  </div>

                  <div class="d-flex align-items-center mb-3">
                    <div
                      class="ingredient-number d-flex justify-content-center align-items-center me-3"
                    >
                      4
                    </div>
                    <h6 class="mb-0 text-secondary">
                      2 tablespoons taco seasoning
                    </h6>
                  </div>

                  <div class="d-flex align-items-center mb-3">
                    <div
                      class="ingredient-number d-flex justify-content-center align-items-center me-3"
                    >
                      5
                    </div>
                    <h6 class="mb-0 text-secondary">Shredded lettuce</h6>
                  </div>

                  <div class="d-flex align-items-center mb-3">
                    <div
                      class="ingredient-number d-flex justify-content-center align-items-center me-3"
                    >
                      6
                    </div>
                    <h6 class="mb-0 text-secondary">Diced tomatoes</h6>
                  </div>

                  <div class="d-flex align-items-center mb-3">
                    <div
                      class="ingredient-number d-flex justify-content-center align-items-center me-3"
                    >
                      7
                    </div>
                    <h6 class="mb-0 text-secondary">Shredded cheddar cheese</h6>
                  </div>

                  <div class="d-flex align-items-center">
                    <div
                      class="ingredient-number d-flex justify-content-center align-items-center me-3"
                    >
                      8
                    </div>
                    <h6 class="mb-0 text-secondary">Sour cream</h6>
                  </div>
                </div>
                <!-- Instructions Tab -->
                <div class="tab-pane fade" id="instructions" role="tabpanel">
                  <div class="tab-scroll pe-2">
                    <div class="d-flex align-items-start mb-4">
                      <div class="step-number me-3">1</div>
                      <p class="step-text">
                        Heat a large skillet over medium-high heat. Cook ground
                        beef until browned.
                      </p>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                      <div class="step-number me-3">2</div>
                      <p class="step-text">
                        Add diced onion and cook until softened, about 5
                        minutes.
                      </p>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                      <div class="step-number me-3">3</div>
                      <p class="step-text">
                        Stir in taco seasoning and 1/2 cup water. Simmer for 10
                        minutes.
                      </p>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                      <div class="step-number me-3">4</div>
                      <p class="step-text">
                        Warm taco shells according to package directions.
                      </p>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                      <div class="step-number me-3">5</div>
                      <p class="step-text">
                        Fill each shell with seasoned beef.
                      </p>
                    </div>
                    <div class="d-flex align-items-start">
                      <div class="step-number me-3">6</div>
                      <p class="step-text">
                        Top with lettuce, tomatoes, cheese, sour cream, and
                        salsa. Serve immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Nutrition Tab -->
                <div class="tab-pane fade" id="nutrition" role="tabpanel">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="nutrition-icon bg-warning-subtle text-warning"
                          >
                            <i class="fa-solid fa-fire"></i>
                          </div>
                          <span>Calories</span>
                        </div>

                        <h4 class="fw-bold mb-0">420 kcal</h4>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="nutrition-icon bg-primary-subtle text-primary"
                          >
                            <i class="fa-solid fa-dumbbell"></i>
                          </div>
                          <span>Protein</span>
                        </div>

                        <h4 class="fw-bold mb-0">26g</h4>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="nutrition-icon bg-warning-subtle text-warning"
                          >
                            <i class="fa-solid fa-wheat-awn"></i>
                          </div>

                          <span>Carbohydrates</span>
                        </div>

                        <h4 class="fw-bold mb-0">32g</h4>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="nutrition-icon bg-danger-subtle text-danger"
                          >
                            <i class="fa-solid fa-droplet"></i>
                          </div>

                          <span>Fat</span>
                        </div>

                        <h4 class="fw-bold mb-0">20g</h4>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="nutrition-icon bg-success-subtle text-success"
                          >
                            <i class="fa-solid fa-seedling"></i>
                          </div>

                          <span>Fiber</span>
                        </div>

                        <h4 class="fw-bold mb-0">4g</h4>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="nutrition-card">
                        <div class="d-flex align-items-center gap-3">
                          <div
                            class="nutrition-icon bg-danger-subtle text-danger"
                          >
                            <i class="fa-solid fa-cube"></i>
                          </div>

                          <span>Sodium</span>
                        </div>

                        <h4 class="fw-bold mb-0">780mg</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Tips Tab -->
                <div class="tab-pane fade" id="tips" role="tabpanel">
                  <div class="d-flex flex-column gap-3">
                    <div class="tip-card">
                      <i class="fa-solid fa-circle-check me-3"></i>
                      Drain excess fat from beef for healthier tacos
                    </div>

                    <div class="tip-card">
                      <i class="fa-solid fa-circle-check me-3"></i>
                      Warm shells in oven for better texture
                    </div>

                    <div class="tip-card">
                      <i class="fa-solid fa-circle-check me-3"></i>
                      Prepare all toppings before cooking beef
                    </div>

                    <div class="tip-card">
                      <i class="fa-solid fa-circle-check me-3"></i>
                      Use ground turkey for a lighter option
                    </div>
                  </div>
                </div>
              </div>

              <div class="pt-4 mt-4 border-top">
                <button class="recipe-btn" onclick="RandomContent()">
                  <i class="bi bi-arrow-repeat me-2"></i>
                  Try Another Recipe
                </button>
              </div>
            </div>
          </div>
        </div>`;
  if (foodList[randomPosition].Extended_Preparation_time == "True") {
    document.getElementById("Alert").classList.add("d-block");
    document.getElementById("Alert").classList.remove("d-none");
  } else {
    document.getElementById("Alert").classList.remove("d-block");
    document.getElementById("Alert").classList.add("d-none");
  }
  console.log(randomPosition);
}
RandomContent();
