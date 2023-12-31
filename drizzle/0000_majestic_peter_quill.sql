CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"first" varchar(256) NOT NULL,
	"last" varchar(256) NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
