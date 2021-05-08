### installation

- 前提：docker Engine, docker-compose をインストールずみ。 ( [docker について↓で補足あり](#docker-%E3%81%A8-docker-compose--%E3%81%AE%E8%A3%9C%E8%B6%B3)) )

- 注意点：Linux には対応できていません。Docker Decktop for Mac, Docker Desktop for Windows を想定しています。  
 (Linux をホストとして使ってる場合、コンテナ上でファイルを読み書きした時に permission denied が発生するはず)  
 **Windows の場合、  WSL 上に Docker を入れるのではなく Docker Desktop for Windows を使うようにすれば本環境が動くはずです(Docker Desktop WSL 2 backend)**  
 (↓で補足します)
- 起動コマンド：
  - `docker-compose up -d` ※
  - 起動できた雰囲気になったら、ブラウザで `http://localhost:8888` へ。Enjoy 👍
  - プロセスを停止する時は `docker-compose stop`
  - ※もし起動できなければ、Docker Engine のデーモンが立ち上がってない可能性が高いです。  
  GUI(Docker Desktop) かコマンドでデーモンの状態を確認し、立ち上がってなければ起動してください。
  コマンドの場合は、`sudo service docker status`, `sudo service docker start`。(Windows Power Shell だと別のコマンドかも。)


- cf: [【Docker】3分でjupyterLab(python)環境を作る！](https://qiita.com/hgaiji/items/edf71435d0565257f980)

### グラフライブラリについて
『Python で学ぶ線形代数学』では、3Dグラフィックスを扱えるグラフライブラリとして VPython を使っていますが、Jupyter Lab で使えなさそうだった(https://github.com/vpython/vpython-jupyter/issues/95) ので、代わりに [plotly](https://plotly.com/python/) を採用しました。
- 数学っぽいグラフが書きやすそう (https://plotly.com/python/scientific-charts/)
- グリグリできる(interactiveな)グラフも生成できそう

というのが採用理由です。

### 参考文献
- [Pythonで学ぶ線形代数学](https://www.amazon.co.jp/dp/B08BP19MMK)
