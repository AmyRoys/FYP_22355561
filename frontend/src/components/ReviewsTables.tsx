import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PeopleIcon from "@mui/icons-material/People";
import "../styles/ReviewsTables.css";
import { useState, useEffect } from "react";

const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const ReviewsTable = () => {
  const [search, setSearch] = useState("");
  const [tableSearch, setTableSearch] = useState("");
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    platform: "",
    url: "",
    review: "",
    status: "Active",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter reviews based on tableSearch (case-insensitive, matches any field)
  const filteredReviews = reviews.filter(row =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(tableSearch.toLowerCase())
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewReview({ platform: "", url: "", review: "", status: "Active" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      if (res.ok) {
        const added = await res.json();
        setReviews([added, ...reviews]);
        handleClose();
      } else {
        // Optionally handle error
        alert("Failed to add review.");
      }
    } catch {
      alert("Failed to connect to backend.");
    }
  };

  return (
    <>
      <div className="header-row">
        <div className="hello">
          <h2>Hello Emily 👋</h2>
        </div>
        <div className="search-bar-container">
          <div className="search-bar-wrapper">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <SearchIcon className="search-bar-icon" />
          </div>
        </div>
      </div>
      <div className="header-rounded-box">
        <div className="header">
          <div className="header-content">
            <div className="stat-with-icon">
              <span className="stat-circle stat-flag">
                <FlagIcon fontSize="large" />
              </span>
              <div className="stat-text">
                <p>Flagged Instances</p>
                <h2>5,423</h2>
              </div>
            </div>
            <div className="stat-with-icon">
              <span className="stat-circle stat-review">
                <RateReviewIcon fontSize="large" />
              </span>
              <div className="stat-text">
                <p>Reviews Contributed</p>
                <h2>1,893</h2>
              </div>
            </div>
            <div className="stat-with-icon">
              <span className="stat-circle stat-active">
                <PeopleIcon fontSize="large" />
              </span>
              <div className="stat-text">
                <p>Active Now</p>
                <h2>189</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-rounded-box">
        {/* Table heading and search bar row */}
        <div className="table-header-row">
          <h3 className="table-title">All Reviews</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button className="new-review-btn" onClick={handleOpen}>
              + New Review
            </button>
            <div className="table-search-bar-align">
              <div className="search-bar-container">
                <div className="search-bar-wrapper">
                  <input
                    type="text"
                    className="search-bar"
                    placeholder="Search Table..."
                    value={tableSearch}
                    onChange={e => setTableSearch(e.target.value)}
                  />
                  <SearchIcon className="search-bar-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Review Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Review</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 350 }}>
              <TextField
                label="Platform"
                name="platform"
                value={newReview.platform}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="URL"
                name="url"
                value={newReview.url}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Review"
                name="review"
                value={newReview.review}
                onChange={handleChange}
                required
                multiline
                minRows={2}
                fullWidth
              />
              <TextField
                select
                label="Status"
                name="status"
                value={newReview.status}
                onChange={handleChange}
                required
                fullWidth
              >
                {statusOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    <Button
                      variant="contained"
                      color={option.value === "Active" ? "success" : "error"}
                      size="small"
                      style={{ pointerEvents: "none", minWidth: 80 }}
                    >
                      {option.label}
                    </Button>
                  </MenuItem>
                ))}
              </TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">Add Review</Button>
            </DialogActions>
          </form>
        </Dialog>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Platform Name</TableCell>
                <TableCell>URL</TableCell>
                <TableCell>Review</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4}>Loading...</TableCell>
                </TableRow>
              ) : filteredReviews.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4}>No reviews found.</TableCell>
                </TableRow>
              ) : (
                filteredReviews.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.platform}</TableCell>
                    <TableCell>
                      <a href={row.url} target="_blank" rel="noopener noreferrer">
                        {row.url}
                      </a>
                    </TableCell>
                    <TableCell>{row.review}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color={row.status === "Active" ? "success" : "error"}
                      >
                        {row.status}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ReviewsTable;
