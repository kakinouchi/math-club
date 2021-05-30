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
(もともと JupyterLab + plotly ではじめましたが、あとから p5.js も気になってきたので追加したという経緯です。)

ほとんどの描画は(がんばれば)どちらでもできると思います。

わかってる範囲で向き不向きを書いておきます：
 - 座標軸を書いたりしたかったら plotly の方が楽。(p5.js で座標書くのはめんどい)
 - アニメーションは(当然?)p5.js の方が楽。
