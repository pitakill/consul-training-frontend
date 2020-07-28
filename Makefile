.PHONY: create deploy all

image = pitakill/consul-training-frontend

all: update-version create deploy

update-version:
	@echo -e "const version = \"$(version)\";\n\nexport default version;" > src/version.js

create:
	docker build -t $(image):$(version) .

deploy:
	docker push $(image):$(version)
	docker tag $(image):$(version) $(image):latest
	docker push $(image):latest
