from pydantic import BaseModel

class EmailSchema(BaseModel):
    name: str = ''
    email: str = ''
    message: str = ''
    
class EmailResponse(BaseModel):
    message: str = ''
    status: int = 0
    error: str | None = None