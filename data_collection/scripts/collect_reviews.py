import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import NoSuchElementException, WebDriverException
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

def get_reviews(url):
    # Set up the Selenium WebDriver
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')  # Run in headless mode
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    
    # Load the page
    driver.get(url)
    time.sleep(5)  # Wait for the page to load

    # Click the "Load more" button until it is no longer available
    while True:
        try:
            load_more_button = driver.find_element(By.CLASS_NAME, 'mUIrbf-LgbsSe mUIrbf-LgbsSe-OWXEXe-dgl2Hf')  # Use the first part of the class name mUIrbf-LgbsSe mUIrbf-LgbsSe-OWXEXe-dgl2Hf
            load_more_button.click()
            time.sleep(2)  # Wait for new reviews to load
        except NoSuchElementException:
            break
        except WebDriverException as e:
            print(f"WebDriverException encountered: {e}. Retrying...")
            driver.quit()
            driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
            driver.get(url)
            time.sleep(5)

    # Get the page source and parse it with BeautifulSoup
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    driver.quit()

    reviews = []

    # Assuming reviews are contained in elements with a specific class name
    review_elements = soup.find_all(class_='T7rvce')  # Replace 'T7rvce' with the actual class name of the review elements

    for element in review_elements:
        review_text = element.get_text(strip=True)
        reviews.append(review_text)

    return reviews

def main():
    url = 'https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk/reviews'  # Replace with the actual URL
    reviews = get_reviews(url)

    if reviews:
        with open('collected_reviews.txt', 'w', encoding='utf-8') as file:
            for review in reviews:
                file.write(f"{review}\n")
        print("Reviews have been saved to collected_reviews.txt")
    else:
        print("No reviews found.")

if __name__ == "__main__":
    main()