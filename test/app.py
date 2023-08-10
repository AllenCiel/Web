from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
import json
import utils
from decimal import Decimal

app = Flask(__name__)


class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, Decimal):
            return int(o)
        super(DecimalEncoder, self).default(o)


@app.route('/')
def hello_world():  # put application's code here
    return render_template('main.html')


@app.route('/time')
def get_time():
    return utils.get_time()


@app.route('/t8')
def get_t8_data():
    data = utils.get_t8_data()
    day, unsafe1, unsafe2 = [], [], []
    for a, b, c in data:
        day.append(a.strftime("%m-%d"))
        unsafe1.append(b)
        unsafe2.append(c)
    return jsonify({'day': day, 'd1': unsafe1, "d2": unsafe2})

@app.route('/t7')
def get_t7_data():
    data = utils.get_t7_data()
    res = []
    for d in data:
        res.append(d)
    return jsonify({'d1': res})

# @app.route('/ajax', methods=['get','post'])
# def hello_world4():  # put application's code here
#     name  = request.values.get('name')
#     score = request.values.get('score')
#     print(f'name:{name}, score:{score}')
#     return '1000'

@app.route('/t2')
def get_t2_data():
    data = utils.get_t2_data()
    return jsonify(
        {"d1": json.dumps(data[0], cls=DecimalEncoder), 'd2': data[1], 'd3': json.dumps(data[2], cls=DecimalEncoder)})


@app.route('/abc')
def hello_world1():
    return """
    <form>
        账号：<input><br>
        密码：<input>
    </form>
    """


if __name__ == '__main__':
    app.run()
