import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const reviews = [
  { platform: 'Spotify', url: 'https://www.spotify.com', review: 'Low contrast text on product pages – fails accessibility.', status: 'Active' },
  { platform: 'Reddit', url: 'https://www.reddit.com', review: 'Pushes users into connections by auto-suggesting.', status: 'Inactive' },
  { platform: 'Zara', url: 'https://www.zara.com', review: 'Excellent accessibility overall, but the gamification is distracting.', status: 'Inactive' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com', review: 'Sneaky UI – checkbox to join Prime is auto-selected.', status: 'Active' },
];

const ReviewsTable = () => {
  return (
    <TableContainer component={Paper}>
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
          {reviews.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.platform}</TableCell>
              <TableCell>
                <a href={row.url} target="_blank" rel="noopener noreferrer">
                  {row.url}
                </a>
              </TableCell>
              <TableCell>{row.review}</TableCell>
              <TableCell>
                <Button variant="contained" color={row.status === 'Active' ? 'success' : 'error'}>
                  {row.status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReviewsTable;