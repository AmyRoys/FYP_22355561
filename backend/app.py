import sqlite3
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DB_PATH = "reviews.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            platform TEXT NOT NULL,
            url TEXT NOT NULL,
            review TEXT NOT NULL,
            status TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

def get_all_reviews():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT platform, url, review, status FROM reviews ORDER BY id DESC")
    rows = c.fetchall()
    conn.close()
    return [
        {"platform": r[0], "url": r[1], "review": r[2], "status": r[3]}
        for r in rows
    ]

def add_review(data):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute(
        "INSERT INTO reviews (platform, url, review, status) VALUES (?, ?, ?, ?)",
        (data["platform"], data["url"], data["review"], data["status"])
    )
    conn.commit()
    conn.close()

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Welcome to the Flask API!"
    })

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({
        "message": "Hello from Flask!",
        "data": [1, 2, 3, 4, 5]
    })

@app.route('/api/reviews', methods=['GET', 'POST'])
def reviews():
    if request.method == 'POST':
        data = request.get_json()
        if not all(k in data for k in ("platform", "url", "review", "status")):
            return jsonify({"error": "Missing fields"}), 400
        add_review(data)
        return jsonify(data), 201
    else:
        return jsonify(get_all_reviews())

if __name__ == '__main__':
    init_db()
    app.run(debug=True, host="0.0.0.0", port=5000)