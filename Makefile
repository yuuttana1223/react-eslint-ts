NODE_BIN = ./node_modules/.bin

# ファイル名との競合を避けるため
.PHONY: deps dev build lint preview format

deps:
	yarn install

dev:
	$(NODE_BIN)/vite

build:
	$(NODE_BIN)/tsc && $(NODE_BIN)/vite build

lint:
	$(NODE_BIN)/eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0

preview:
	$(NODE_BIN)/vite preview
