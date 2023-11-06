from flask import Flask ,jsonify,request
from flask_sqlalchemy import SQLAlchemy
import datetime 
app=Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:''@localhost/flaskreact"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db=SQLAlchemy(app)


class Users(db.Model):
    __tablename= "users"
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    date=db.Column(db.DateTime,default=datetime.datetime.now)
    
    def __init__(self,name,email):
        self.name=name
        self.email=email

@app.route("/")
def hello_world():
    return "<p>Hello,World</p>"

@app.route('/useradd',methods=['POST'])
def useradd():
    name=request.json['name']
    email=request.json['email']
    
    users=Users(name,email)
    db.session.add(users)
    db.session.commit()
    
    return jsonify({'success:':"success post"})