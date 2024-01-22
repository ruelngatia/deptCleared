from langchain.document_loaders import PyPDFLoader
from langchain.document_loaders import Docx2txtLoader
from langchain.document_loaders import TextLoader
from pathlib import Path

class DocumentLoader:
    def load_file(self, file_path):
        documents = []

        if isinstance(file_path, str):  
            file = Path(file_path)

        if file is not None:
            file_name = file.name

            if file_name.endswith(".pdf"):
                loader = PyPDFLoader(str(file))
                documents.extend(loader.load())
            elif file_name.endswith('.docx') or file_name.endswith('.doc'):
                loader = Docx2txtLoader(str(file))
                documents.extend(loader.load())
            elif file_name.endswith('.txt'):
                loader = TextLoader(str(file))
                documents.extend(loader.load())

        return ' '.join(str(doc) for doc in documents)