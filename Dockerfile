FROM jupyter/datascience-notebook
WORKDIR /home/jovyan/work

RUN conda install -c plotly plotly=4.14.3 && \
    conda install jupyterlab "ipywidgets>=7.5" && \
    jupyter labextension install jupyterlab-plotly@4.14.3

# Following command makes build failure... by https://github.com/plotly/plotly.py/issues/1746 ??
# jupyter labextension install @jupyter-widgets/jupyterlab-manager plotlywidget@4.14.3