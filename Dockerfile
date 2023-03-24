FROM python:3.10.6-alpine
FROM jenkins/jenkins:lts
ENV PYTHONUNBUFFERED=1
WORKDIR .
USER root
RUN apt-get update && \
    apt-get -y install \
    apt-transport-https \
    ca-certificates \
    gnupg2 \
    software-properties-common \
RUN curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; echo "$ID")/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; echo "$ID") \
   $(lsb_release -cs) \
   stable"
RUN apt-get update
RUN pip install pipenv
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev


COPY config/nginx/default /etc/nginx/sites-available/default
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY Pipfile .
COPY Pipfile.lock .
RUN python -m pip install --upgrade pip
RUN pip install pipenv
RUN pipenv install --dev --system --deploy
COPY entrypoint.sh .
COPY . .

EXPOSE 80/tcp 443/tcp
ENTRYPOINT ["./entrypoint.sh"]