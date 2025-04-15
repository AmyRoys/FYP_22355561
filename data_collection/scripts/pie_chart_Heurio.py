import pandas as pd
import matplotlib.pyplot as plt

# Read the categorized reviews CSV file
file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/Heurio_reviews.csv'
df = pd.read_csv(file_path)

# Split the categories and count the occurrences
category_counts = df['Categories'].str.split(', ').explode().value_counts()

# Define custom colors for the pie chart
colors = ['#ccffff', '#ff99cc', '#ffff99', '#ccff99', '#ffcc66', '#cc66ff']

# Plot the occurrences of each category as a pie chart
plt.figure(figsize=(10, 6))
category_counts.plot(kind='pie', autopct='%1.1f%%', colors=colors)
plt.title('Heurio')
plt.ylabel('')  # Hide the y-label

# Save the plot to a file
output_file_path = 'c:/Users/L093017/OneDrive - Eli Lilly and Company/Documents/Dev/FYP_22355561/DataCollection/Heurio_category_graph.png'
plt.savefig(output_file_path)

# Show the plot
plt.show()

print(f"Category occurrences graph saved to {output_file_path}")