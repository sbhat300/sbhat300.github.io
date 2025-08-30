from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from PydanticClasses.email_classses import EmailSchema, EmailResponse
from Logger.logger import get_logger
import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText

load_dotenv()

app = FastAPI()
logger = get_logger()

origins = [
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"]
)

@app.get('/')
def root():
    return {'message': 'Server is running'}

@app.post('/send-email')
def send_email(email: EmailSchema) -> EmailResponse:
    logger.info('Send email endpoint called')
    
    name = email.name
    email_address = email.email
    message = email.message
            
    if not name or not email_address or not message:
        logger.error('One or more fields are empty')
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=EmailResponse(
                message='All fields are required',
                status=400,
                error='One or more fields are empty'
            ).model_dump()
        )
        
    logger.info(f'Received email send request from {name} <{email_address}>, Message: {message}')
    
    FROM_EMAIL = os.getenv('FROM_EMAIL')
    TO_EMAIL = os.getenv('TO_EMAIL')
    EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD')
    
    msg = MIMEText(f'Received a message from {name} <{email_address}>. Message content:\n\n{message}')
    msg['Subject'] = f'Contact Form Message From {name}'
    msg['From'] = FROM_EMAIL
    msg['To'] = TO_EMAIL
    
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
        try:
            smtp_server.login(FROM_EMAIL, EMAIL_PASSWORD)
            smtp_server.sendmail(FROM_EMAIL, TO_EMAIL, msg.as_string())
        except Exception as e:
            logger.error(f'Error sending email: {e}')
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=EmailResponse(
                    message='Failed to send email',
                    status=500,
                    error=str(e)
                ).model_dump()
            )

    logger.info('Email sent successfully')
    return EmailResponse(
        message='Email sent successfully',
        status=200
    )