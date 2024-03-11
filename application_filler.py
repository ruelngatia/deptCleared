import openai
import os
from dotenv import load_dotenv
load_dotenv()

class FormFiller:
    def __init__(self, form):
        self.openai_api_key = os.getenv('OPENAI_API')
        self.client = openai.OpenAI(api_key = self.openai_api_key)
        self.form = form
    def fill_form(self):
        text_gen = self.client.chat.completions.create(
            model="gpt-3.5-turbo-1106",
            messages=[
                {
                    "role": "system",
                    "content": "I am an AI assistant that guides individuals through the complex process of completing debt application forms in the UK"                
                },
                {
                    "role": "system",
                    "content": f"Generate the structure of the {self.form} form in the UK"                
                },
                {
                    "role": "system",
                    "content": "Answer the questions in the structure generated with basic answers that will help the user make the application. \
                                Guide the user fully and be as detailed as possible no brief overview just one complete response."                
                }
            ]
        )

        choice = text_gen.choices[0]  
        message = choice.message      
        content = message.content    
        return content

