import pandas as pd
from flask import Flask, jsonify, request
import numpy as np
from PIL import Image
import base64
import re
from io import StringIO, BytesIO
from tensorflow import keras


# load model
model = model = keras.models.load_model('./model.h5')
# app
app = Flask(__name__)



# routes
@app.route('/maskImage' , methods=['POST'])
def maskImage():
    base64_img = file = request.files['canvas'].read() 
    base64_img = re.sub('^data:image/.+;base64,', '', base64_img)
    base64_img_bytes = base64_img.encode('utf-8')
    decoded_image_data = base64.decodebytes(base64_img_bytes)
    return decoded_image_data

@app.route('/', methods=['POST'])
def predict():
    # get data
    data = request.get_json(force=True)

    # convert data into dataframe
    data.update((x, [y]) for x, y in data.items())
    data_df = pd.DataFrame.from_dict(data)

    # predictions
    result = model.predict(data_df)

    # send back to browser
    output = {'results': int(result[0])}

    # return data
    return jsonify(results=output)

if __name__ == '__main__':
    app.run(port = 5000, debug=True)
