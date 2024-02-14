from flask import Flask, request, jsonify
from flask_cors import CORS
from flasgger import Swagger
from application_filler import FormFiller
from chatbot import Chatbot

app = Flask(__name__)
CORS(app)
Swagger(app)

@app.route('/fill-application', methods=['POST'])
def fill_application():
    """
    An endpoint to get form filling help.
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          id: application
          required:
            - form_type
          properties:
            form_type:
              type: string
              description: The type of form to be filled
              default: "Job Application"
    responses:
      200:
        description: The result is
    """
    try:
        data = request.json
        form_type = data.get('form_type')

        if not form_type:
            return jsonify({'error': 'Invalid input. Please provide form_type parameter.'})

        filler = FormFiller(form_type)
        response = filler.fill_form()

        return jsonify({'filled_form': response})

    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/chatbot', methods=['POST'])
def chatbot_endpoint():
    """
    Chatbot endpoint
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          id: chatbot
          required:
            - query
          properties:
            query:
              type: string
              description: The query for the chatbot
              default: "Hello, chatbot!"
    responses:
      200:
        description: The result is
    """
    data = request.get_json()

    if 'query' not in data:
        return jsonify({"error": "Missing 'query' parameter"}), 400

    query = data['query']
    chat = Chatbot(query)
    response = chat.main()

    return jsonify({"response": response})




@app.route('/', methods=['GET'])
def home():
    """
    A simple welcome message
    ---
    responses:
      200:
        description: Welcome message
    """
    return "Hello, World!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3012)
