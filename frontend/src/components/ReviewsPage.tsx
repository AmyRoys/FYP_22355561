"use client";
import React from "react";
import styles from '../styles/ReviewsPage.module.css';
// import Sidebar from "./Sidebar";

const ReviewsPage: React.FC = () => {
  return (
    <main className={styles.reviewsPage}>
      <div className={styles.div}>
        {/* <Sidebar /> */}

        <section className={styles.column2}>
          <div className={styles.div19}>
            <header className={styles.div20}>
              <h2 className={styles.helloEmily}>Hello Emily 👋🏼,</h2>
              <div className={styles.div21}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7e5f754749d2e6acb612bc3d4e487f06c67814a?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
                  alt="Search Icon"
                  className={styles.img15}
                />
                <input
                  type="search"
                  placeholder="Search"
                  className={styles.search}
                />
              </div>
            </header>

            <section className={styles.div22}>
              <div className={styles.div23}>
                <div className={styles.div24} />
                <div className={styles.div25}>
                  <h3 className={styles.flaggedInstances}>Flagged Instances</h3>
                  <p className={styles.css5423}>5,423</p>
                  <div className={styles.div26}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6c3d0c0d93e60e5e83bd975a7ffba9cb0ccf8a8?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
                      alt="Trend Icon"
                      className={styles.img16}
                    />
                    <p>
                      <strong style={{ color: "rgba(0,172,79,1)" }}>16%</strong>{" "}
                      this month
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.div27} />

              <div className={styles.div28}>
                <div className={styles.div29} />
                <div className={styles.div30}>
                  <h3 className={styles.reviewsContributed}>
                    Reviews Contributed
                  </h3>
                  <p className={styles.css1893}>1,893</p>
                  <div className={styles.div31}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbc150e849bd3324621ab58dba3f3f88f8488355?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
                      alt="Trend Icon"
                      className={styles.img17}
                    />
                    <p>
                      <strong style={{ color: "rgba(208,0,75,1)" }}>1%</strong>{" "}
                      this month
                    </p>
                  </div>
                </div>
                <div className={styles.div32} />
              </div>

              <div className={styles.div33}>
                <div className={styles.div34} />
                <div className={styles.div35}>
                  <h3 className={styles.activeNow}>Active Now</h3>
                  <p className={styles.css189}>189</p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fb865d50f2377da0840f5b5eed933be64e618f1?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
                    alt="Active Users"
                    className={styles.img18}
                  />
                </div>
              </div>
            </section>

            <section className={styles.div36}>
              <div className={styles.div37}>
                <div className={styles.div}>
                  <div className={styles.column3}>
                    <div className={styles.div38}>
                      <div className={styles.div39}>
                        <h2 className={styles.allReviews}>All Reviews</h2>
                        <p className={styles.activeAndInactive}>
                          Active And Inactive
                        </p>
                        <p className={styles.platformName}>Platform Name</p>
                      </div>
                      <p className={styles.url}>URL</p>
                    </div>
                  </div>

                  <div className={styles.column4}>
                    <div className={styles.div40}>
                      <p className={styles.review}>Review</p>
                      <div className={styles.div41}>
                        <div className={styles.div42}>
                          <div className={styles.div43}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7e5f754749d2e6acb612bc3d4e487f06c67814a?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
                              alt="Search Icon"
                              className={styles.img19}
                            />
                            <input
                              type="search"
                              placeholder="Search"
                              className={styles.search2}
                            />
                          </div>
                          <div className={styles.div44}>
                            <p className={styles.shortbyNewest}>
                              Short by:{" "}
                              <strong style={{ color: "rgba(61,60,66,1)" }}>
                                Newest
                              </strong>
                            </p>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ce2c649f0c9918bd212e3082d15dd033064cd6?placeholderIfAbsent=true&apiKey=1e23877f7d2f4d89baf473e804c7faf9"
                              alt="Sort Icon"
                              className={styles.img20}
                            />
                          </div>
                        </div>
                        <p className={styles.status}>Status</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className={styles.div45} />

              {/* Reviews List */}
              <div className={styles.div46}>
                <h3 className={styles.spotify}>Spotify</h3>
                <a
                  href="https://www.spotify.com"
                  className={styles.httpswwwspotifycom}
                >
                  https://www.spotify.com
                </a>
                <div className={styles.div47}>
                  <p className={styles.lowcontrasttextonproductpagesfailsac}>
                    "Low contrast text on product pages – fails ac
                  </p>
                  <span className={styles.active}>Active</span>
                </div>
              </div>

              <hr className={styles.div48} />

              <div className={styles.div49}>
                <h3 className={styles.reddit}>Reddit</h3>
                <a
                  href="https://www.reddit.com"
                  className={styles.httpswwwredditcom}
                >
                  https://www.reddit.com
                </a>
                <div className={styles.div50}>
                  <p className={styles.pushesusersintoconnectionsbyautoSug}>
                    "Pushes users into connections by auto-sug
                  </p>
                  <span className={styles.inactive}>Inactive</span>
                </div>
              </div>

              <hr className={styles.div51} />

              <div className={styles.div52}>
                <h3 className={styles.zara}>Zara</h3>
                <a
                  href="https://www.adobe.com"
                  className={styles.httpswwwadobecom}
                >
                  https://www.adobe.com
                </a>
                <div className={styles.div53}>
                  <p
                    className={styles.excellentaccessibilityoverallbutthegamif}
                  >
                    "Excellent accessibility overall, but the gamif
                  </p>
                  <span className={styles.inactive}>Inactive</span>
                </div>
              </div>

              <hr className={styles.div54} />

              <div className={styles.div55}>
                <h3 className={styles.linkedIn}>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com"
                  className={styles.httpswwwlinkedincom}
                >
                  https://www.linkedin.com
                </a>
                <div className={styles.div56}>
                  <p className={styles.sneakyUIcheckboxtojoinPrimeisauto}>
                    "Sneaky UI – checkbox to join Prime is auto-
                  </p>
                  <span className={styles.active}>Active</span>
                </div>
              </div>

              <hr className={styles.div57} />

              <div className={styles.div58}>
                <h3 className={styles.duolingo}>Duolingo</h3>
                <a
                  href="https://www.duolingo.com"
                  className={styles.httpswwwduolingocom}
                >
                  https://www.duolingo.com
                </a>
                <div className={styles.div59}>
                  <p className={styles.cleanUIbutemotionaldesignnudgesuser}>
                    "Clean UI, but emotional design nudges user
                  </p>
                  <span className={styles.active}>Active</span>
                </div>
              </div>

              <hr className={styles.div60} />

              <div className={styles.div61}>
                <h3 className={styles.amazon}>Amazon</h3>
                <a
                  href="https://www.amazon.com"
                  className={styles.httpswwwamazoncom}
                >
                  https://www.amazon.com
                </a>
                <div className={styles.div62}>
                  <p className={styles.theinterfaceusesurgencycueslikeOnly}>
                    "The interface uses urgency cues like 'Only
                  </p>
                  <span className={styles.active}>Active</span>
                </div>
              </div>

              <hr className={styles.div63} />

              <div className={styles.div64}>
                <h3 className={styles.canva}>Canva</h3>
                <a
                  href="https://www.canva.com"
                  className={styles.httpswwwcanvacom}
                >
                  https://www.canva.com
                </a>
                <div className={styles.div65}>
                  <p className={styles.usesvisuallyoverwhelminglayoutsthatdist}>
                    "Uses visually overwhelming layouts that dist
                  </p>
                  <span className={styles.active}>Active</span>
                </div>
              </div>

              <hr className={styles.div66} />

              <div className={styles.div67}>
                <h3 className={styles.facebook}>Facebook</h3>
                <a
                  href="https://www.facebook.com"
                  className={styles.httpswwwfacebookcom}
                >
                  https://www.facebook.com
                </a>
                <div className={styles.div68}>
                  <p className={styles.darkpatternTheDeactivateAccountoptio}>
                    "Dark pattern: The 'Deactivate Account' optio
                  </p>
                  <span className={styles.inactive}>Inactive</span>
                </div>
              </div>

              <hr className={styles.div69} />

              <div className={styles.div70}>
                <p className={styles.showingdata1To8Of256Kentries}>
                  Showing data 1 to 8 of 256K entries
                </p>
                <nav className={styles.div71} aria-label="Pagination">
                  <button className={styles.div72} aria-label="Previous page">
                    &lt;
                  </button>
                  <button className={styles.css1} aria-current="page">
                    1
                  </button>
                  <button className={styles.css2}>2</button>
                  <button className={styles.css3}>3</button>
                  <button className={styles.css4}>4</button>
                  <span className={styles.div73}>...</span>
                  <button className={styles.css40}>40</button>
                  <button className={styles.div74} aria-label="Next page">
                    &gt;
                  </button>
                </nav>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ReviewsPage;
