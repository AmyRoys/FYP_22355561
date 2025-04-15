from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the React frontend
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

if __name__ == '__main__':
    app.run(debug=True)