import pandas as pd

# Read the CSV file
file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/UXTweak_reviews.csv'
df = pd.read_csv(file_path)

# Define themes and keywords
themes = {
    'Feature Requests': ['feature', 'functionality', 'missing', 'desired', 'request'],
    'Usability & Workflow': ['easy', 'hard', 'UI', 'interface', 'workflow', 'intuitive', 'navigate'],
    'Performance & Accuracy': ['reliable', 'consistent', 'accuracy', 'performance', 'results', 'insights'],
    'Versioning & Updates': ['version', 'update', 'outdated', 'old'],
    'Positive Feedback': ['helpful', 'great', 'love', 'excellent', 'fantastic', 'satisfied', 'recommend', 'pro'],
    'Negative Feedback or Complaints': ['bad', 'frustration', 'complaint', 'issue', 'problem', 'confusing', 'difficult', 'con']
}

# Function to categorize comments
def categorize_comment(comment):
    categories = []
    for theme, keywords in themes.items():
        if any(keyword.lower() in comment.lower() for keyword in keywords):
            categories.append(theme)
    if not categories:
        categories.append('Unknown')
    return ', '.join(categories)

# Apply the categorization function to the 'Review' column
df['Categories'] = df['Review'].apply(categorize_comment)

# Save the categorized data to a new CSV file
categorized_file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/categorised_UXTweak_reviews.csv'
df.to_csv(categorized_file_path, index=False)

print(f"Categorized data saved to {categorized_file_path}")