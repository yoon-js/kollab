.PHONY: install migrate makemigrations runserver superuser update

install:
	poetry install
	
migrate:
	poetry run python3 -m manage migrate

makemigrations:
	poetry run python3 -m manage makemigrations

runserver:
	poetry run python3 -m manage runserver

superuser:
	poetry run python3 -m manage createsuperuser

update: install migrate ; @echo "Update complete!"