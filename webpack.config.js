const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./app/index.js", // 1. 진입점 파일
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "docs"), // 2. 빌드 결과물 폴더를 docs로 지정
    publicPath: "./", // 3. 깃허브 페이지 하위 경로 인식용 상대 경로
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // 4. 패키지들의 CSS 파일을 인식하고 합쳐주는 로더 규칙
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 5. index.html 조립 생성
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      filename: "index.html",
    }),
    // 6. memo.html 조립 생성
    new HtmlWebpackPlugin({
      template: "./app/memo.html",
      filename: "memo.html",
    }),
  ],
};
