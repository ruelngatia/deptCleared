from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import Chatbot


app = Flask(__name__)
CORS(app)


@app.route('/debtscleared/chatbot', methods=['POST'])
def chatbot_endpoint():
    data = request.get_json()

    if 'query' not in data:
        return jsonify({"error": "Missing 'query' parameter"}), 400

    query = data['query']
    chat = Chatbot(query)
    response = chat.main()

    return jsonify({"response": response})

@staticmethod
@app.route('/', methods=['GET'])
def home():
    return "Hello, World!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)