import json
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.route('/Search')
def search():
    res = []
    query = request.args.get('q').lower()
    if (query.replace(' ', '') == ''):
        return json.dumps({"res": []})
    for i, d in enumerate(data['Papers']):
        print(i, d)
        if ((query in d['Name'].lower()) or (query in d['Author'].lower()) or (query in [tag.lower() for tag in d['Tags']])):
            res.append(d)

    return json.dumps({"res": res})


if __name__ == '__main__':
    with open('data.json') as f:
        data = json.load(f)
    app.run(debug=True)
