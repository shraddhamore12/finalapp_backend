#!/bin/bash
npm install

if [$(sudo docker container ls -q --filter name=my_app_backend_c) != '' ]; then
sudo docker container stop my_app_backend_c
sudo docker container rm my_app_backend_c --force
fi

if [$(sudo docker image ls -q --filter reference=my_app_db)!='']; then
sudo docker image rm my_app_backend_c
fi

sudo docker image build -t my_app_backend .

sudo docker container run -itd -p 4200:4200 --name my_app_backend_c my_app_backend