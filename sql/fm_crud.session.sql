CREATE TABLE "things"(
  "id" SERIAL PRIMARY KEY,
  "body" TEXT NOT NULL CHECK("body" != ''),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT current_timestamp, 
  "createdAt" TIMESTAMP NOT NULL DEFAULT current_timestamp
);

INSERT INTO "things" ("body") VALUES ('test text') RETURNING *;

UPDATE "things" SET "body"='new text', "updatedAt"=current_timestamp
WHERE "id"=1;

DELETE FROM "things" 
WHERE "id"=1;

SELECT * FROM "things";


SELECT * FROM "things";