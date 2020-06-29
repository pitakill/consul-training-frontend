.PHONY: create deploy all

image = pitakill/consul-training-frontend

all: create deploy

create:
	docker build -t $(image) .

deploy:
	docker push $(image)
