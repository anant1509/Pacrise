# Flask API (app.py)
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Store user credentials (in a real app, use a database)
users = {
    "testuser": "password123",
    "anantbhavsar":"12345",
    "pacrise":"pacrise1234",
}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    # email = data.get('email')

    if username and password and users.get(username) == password:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)