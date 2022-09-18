from fastapi import FastAPI
from promptoDB import *
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Cat(BaseModel):
    category: str
    id: int
    phrase: str

class Model(BaseModel):
    id: int
    userPrompt: str
    phrase: str


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/db")
async def db():
    table = Table()
    table.createTable("food", "phrase", "STRING NOT NULL")
    
    return {"message": "Success"}

@app.post("/setValue/{cat.category}")
async def setValue(cat: Cat):
    table = Table()
    table.setValue(cat.category, ["ID", "phrase"], cat.id, [cat.phrase])

@app.get("/setValue")
async def setValue():
    table = Table()
    table.setValue("art", ["ID", "phrase"], 2, ["Transparent entrance to a small world of personal design and creativity"])

    return {"message": "Success"}

@app.get("/getValue/{cat}")
async def getValue(cat):
    table = Table()
    
    return table.getValue(cat)

@app.get("/getValue")
async def getValue():
    table = Table()
    table.getValue("art")
    
    return table.getValue("art")