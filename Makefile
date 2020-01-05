PROJECT_NAME = Arkanoid

run:
	docker-compose -p $(PROJECT_NAME) up -d

stop:
	docker-compose -p $(PROJECT_NAME) stop

ps:
	docker-compose -p $(PROJECT_NAME) ps

logs:
	docker-compose -p $(PROJECT_NAME) logs
