# math-club

### 想定用途
- 数学の視覚的理解に役立てる

### ディレクトリ構成

図形の描画ツールとして2つのプラットフォームを用意しています。  

 - JupyterLab + plotly
   - `jupyter` ディレクトリにあります。
   - python の環境構築はめんどうなので Docker で環境を用意しています。  
     (`docker-compose up -d` でJupyterLab の環境が立ち上がり webブラウザで操作できます)  　　
     Docker がよくわからない人は [こちら](https://github.com/kakinouchi/math-club/blob/master/docker-explained.md)を参考にしてみてください。
   - グラフライブラリとして [plotly](https://plotly.com/python/) を使っています。
 - p5.js
   - `p5js` ディレクトリにあります。  
   - nodejs をインストールして使ってください。
   - グラフライブラリとして [p5.js](https://p5js.org/) を使っています。

### どっちを使えばよい？
2つの違いは今のところ決めていません。
もともと JupyterLab + plotly ではじめましたが、あとから p5.js も気になってきたので追加したという経緯です。

Python が好きな人は JupyterLab + plotly, JavaScript が好きな人は p5.js で試してみてください。

数学的理解を深めるという点ではどちらのグラフライブラリも遜色ないはずです。強いて言うならば、
 - plotly の方がコードを書くのは簡単かもしれません。
 - p5.js の方がグラフィックとして楽しめそうです。