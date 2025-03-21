import pandas as pd
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import CountVectorizer

# Load the dataset
file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/categorised_YesChat_reviews.csv'
df = pd.read_csv(file_path)

# Separate positive and negative reviews
positive_reviews = ' '.join(df[df['Categories'] == 'Positive Feedback']['Review'])
negative_reviews = ' '.join(df[df['Categories'] == 'Negative Feedback or Complaints']['Review'])

# Generate word cloud for positive reviews
positive_wordcloud = WordCloud(width=800, height=400, background_color='white', colormap='Greens').generate(positive_reviews)

# Generate word cloud for negative reviews
negative_wordcloud = WordCloud(width=800, height=400, background_color='white', colormap='Reds').generate(negative_reviews)

# Plot the word clouds
plt.figure(figsize=(10, 5))
plt.imshow(positive_wordcloud, interpolation='bilinear')
plt.title('Positive Reviews Word Cloud')
plt.axis('off')
plt.show()

# plt.figure(figsize=(10, 5))
# plt.imshow(negative_wordcloud, interpolation='bilinear')
# plt.title('Negative Reviews Word Cloud')
# plt.axis('off')
# plt.show()

# Function to extract top N words
def get_top_words(text, n=10):
    vectorizer = CountVectorizer(stop_words='english', max_features=n)
    word_counts = vectorizer.fit_transform([text])
    words = vectorizer.get_feature_names_out()
    counts = word_counts.toarray().sum(axis=0)
    return dict(zip(words, counts))

# Get top words for positive and negative reviews
top_positive_words = get_top_words(positive_reviews, n=10)
top_negative_words = get_top_words(negative_reviews, n=10)

print("Top Positive Words:", top_positive_words)
print("Top Negative Words:", top_negative_words)