console.log("Options page script loaded");
fetch("http://localhost:5000/api/reviews")
  .then(res => {
    console.log("Fetch status:", res.status);
    return res.json();
  })
  .then(reviews => {
    console.log("Fetched reviews:", reviews);
    const container = document.getElementById("reviews-list");
    if (!reviews.length) {
      container.textContent = "No reviews found.";
      return;
    }
    container.innerHTML = `
      <div class="reviews-container">
        ${reviews.map(r => `
          <div class="review-card">
            <div class="review-header">
              <span class="role-badge">${r.platform}</span>
              <span class="review-time">${new Date().toLocaleTimeString()}</span>
            </div>
            <div class="review-content">
              <p class="review-text">${r.review}</p>
              <a href="${r.url}" target="_blank" class="review-link">${r.url}</a>
            </div>
            <div class="review-status ${r.status === 'Active' ? 'active' : 'inactive'}">
              ${r.status}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  })
  .catch((err) => {
    console.error("Failed to fetch reviews:", err);
    document.getElementById("reviews-list").textContent = "Failed to load reviews.";
  });
