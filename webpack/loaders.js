const COMMON_EXCLUDES = /node_modules/;

exports.tsx = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: COMMON_EXCLUDES
}

exports.html = {
  test: /\.html$/,
  loader: 'html-loader',
  exclude: COMMON_EXCLUDES
}

exports.css = {
  test: /\.css$/,
  loaders: ['style-loader', 'css-loader']
}

exports.woff = {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: "url-loader?limit=10000&mimetype=application/font-woff"
}

exports.ttf = {
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: "file-loader"
}