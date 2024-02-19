import openai

class Chatbot:
    def __init__(self, query):
        self.client = openai.OpenAI(api_key="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")
        self.query = query

    def main(self):
        text_gen = self.client.chat.completions.create(
                model="gpt-3.5-turbo-1106",
                messages=[
                    {
                        "role": "system",
                        "content": "You are an AI assistant on a platform, Debts Cleared that allows users to  provide their financial information and preferences for debt applications and guides them through the complex process of completing debt application forms in the UK."
                    },
                    {
                        "role": "system",
                        "content": f"Answer this query{self.query}"                                            
                    }    
                 ]
             )

        choice = text_gen.choices[0]  
        message = choice.message      
        content = message.content    
        return content


# query = "how many ways can I apply debt applications and how can it help me" 
# chat = Chatbot(query)
# response = chat.main()
# print(response)