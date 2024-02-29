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
    Fill out a form based on the user's input.
    ---
    tags:
      - Form Filling
    parameters:
      - name: form_type
        in: query
        schema:
          type: string
        required: false
        description: The type of the form to fill out. It must be one of the supported form types by the FormFiller class.
        default: Form N349 (Application for a Third Party Debt Order)
    responses:
      200:
        description: The filled form as a JSON object.
        schema:
          type: object
          properties:
            filled_form:
              type: string
      400:
        description: The error message if the form type is not specified or not supported.
        schema:
          type: object
          properties:
            error:
              type: string
      500:
        description: The error message if there is any error in filling the form.
        schema:
          type: object
          properties:
            error:
              type: string
    """
    try:
        form_type = request.args.get('form_type')
        if not form_type:
            return jsonify({'error': 'No form type specified'}), 400

        filler = FormFiller(form_type)
        response = filler.fill_form()

        return jsonify({'filled_form': response})

    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/chatbot', methods=['POST'])
def chatbot_endpoint():
    """
    Get a chatbot response based on the user's query.
    ---
    tags:
      - Chatbot
    parameters:
      - name: body
        in: body
        schema:
          id: chatbot
          required:
            - Who is a debtor when filling in the forms?
          properties:
            query:
              type: string
              description: The query for the chatbot. It can be any question related to the form filling process.
              default: "Who is a debtor when filling in the forms?"
    responses:
      200:
        description: The chatbot response as a JSON object.
        schema:
          type: object
          properties:
            response:
              type: string
      400:
        description: The error message if the query parameter is missing.
        schema:
          type: object
          properties:
            error:
              type: string
      500:
        description: The error message if there is any error in getting the chatbot response.
        schema:
          type: object
          properties:
            error:
              type: string
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
    app.run(debug = True, host='0.0.0.0', port=3012)
