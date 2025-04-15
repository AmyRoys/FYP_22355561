import pandas as pd

# Read the CSV file
file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/collected_reviews.csv'
df = pd.read_csv(file_path)

# Define themes and keywords
themes = {
    'Feature Requests': ['PWA', 'feature', 'functionality', 'missing', 'desired'],
    'Usability & Workflow': ['easy', 'hard', 'UI', 'DevTools', 'extension', 'workflow'],
    'Performance & Accuracy': ['reliable', 'consistent', 'accuracy', 'performance', 'results'],
    'Versioning & Updates': ['version', 'update', 'outdated', 'old'],
    'Positive Feedback': ['helpful', 'ease of use', 'improved', 'great', 'love'],
    'Negative Feedback or Complaints': ['missing', 'inaccurate', 'frustration', 'complaint', 'bad']
}

# Function to categorize comments
def categorize_comment(comment):
    categories = []
    for theme, keywords in themes.items():
        if any(keyword.lower() in comment.lower() for keyword in keywords):
            categories.append(theme)
    return ', '.join(categories)

# Apply the categorization function to the 'Review' column
df['Categories'] = df['Review'].apply(categorize_comment)

# Save the categorized data to a new CSV file
categorized_file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/categorised_reviews.csv'
df.to_csv(categorized_file_path, index=False)

print(f"Categorized data saved to {categorized_file_path}")