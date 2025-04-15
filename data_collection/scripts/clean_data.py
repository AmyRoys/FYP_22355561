import pandas as pd
import re

# Read the CSV file
file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/RedditReviews.csv'
df = pd.read_csv(file_path, header=None, names=['Review'])

# Function to clean the review text
def clean_review(review):
    # Remove the word 'reply' and 'Reply' using regex
    cleaned_review = re.sub(r'\breply\b', '', review, flags=re.IGNORECASE)
    # Remove extra whitespaces and newlines
    cleaned_review = re.sub(r'\s+', ' ', cleaned_review)
    return cleaned_review.strip()

# Apply the cleaning function to the 'Review' column
df['CleanedReview'] = df['Review'].apply(clean_review)

# Remove rows where the cleaned review is empty
df = df[df['CleanedReview'] != '']

# Save the cleaned data to a new CSV file
cleaned_file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/CleanedRedditReviews.csv'
df.to_csv(cleaned_file_path, index=False)

print(f"Cleaned data saved to {cleaned_file_path}")