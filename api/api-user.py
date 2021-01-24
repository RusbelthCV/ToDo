from flask import Flask, make_response, jsonify, request as req
import settings
app = Flask(__name__)
conn = settings.init()
@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    header['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    header['Access-Control-Allow-Methods'] = 'OPTIONS, HEAD, GET, POST, DELETE, PUT'
    return response

@app.route('/')
def getting_cookie():
    cookie = req.cookies.get('login')
    if cookie:
        print("YES")
    else:
        print("NO")
    return jsonify({'cookie':cookie})