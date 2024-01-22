from flask import Flask, request, jsonify
from flask_cors import CORS
from application_filler import FormFiller

app = Flask(__name__)
CORS(app)


@app.route('/fill-application', methods=['POST'])
def generate_survey():
    try:
        data = request.json
        form_type = data.get('form_type')

        if not form_type:
            return jsonify({'error': 'Invalid input. Please provide both number_of_questions and query parameters.'})

        filler = FormFiller(form_type)
        response = filler.fill_form()

        return jsonify({'survey_questions': response})

    except Exception as e:
        return jsonify({'error': str(e)})
    

@staticmethod
@app.route('/', methods=['GET'])
def home():
    return "Hello, World!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)