from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Store user credentials (in a real app, use a database)
users = {
    "anantbhavsar": {"password":"12345", "email":"anant@gmail.com"},
    "user1": {"password": "password123", "email": "user1@example.com"},
    "pacrise": {"password":"pacrise1234", "email": "pacrise1@gmail.com"} 
}
    # "testuser": "password123",
    # "anantbhavsar":"12345",
    # "pacrise":"pacrise1234",


@app.route('/registration', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if username in users and users[username]['password'] == password and users[username]['email'] == email:
        return jsonify({'message': 'Registration successful'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True ,port=5001)