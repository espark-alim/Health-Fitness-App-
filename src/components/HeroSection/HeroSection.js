import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="section bg-home home-half" id="home">
        <div>
          <div class="bg-overlay"></div>
          <div class="display-table">
            <div class="display-table-cell">
              <div class="container">
                <div class="row">
                  <div class="text-white col-lg-8">
                    <h1 class="home-title">
                      Build Perfect body Shape for good and Healthy life.
                    </h1>
                    <button
                      type="button"
                      class="btn my-4 px-5 fs-6 py-3 btn-danger rounded-0 d-none d-sm-none d-lg-block d-md-none"
                    >
                      BECOME A MEMBER
                    </button>
                    {/* <p class="pt-3 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum class at.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-pattern-effect">
          {/* <img src={logo} alt="dorsin" /> */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
