-- AlterTable
ALTER TABLE "public"."Anime" ALTER COLUMN "posterUrl" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Drama" ALTER COLUMN "posterUrl" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Kids" ALTER COLUMN "posterUrl" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Movie" ALTER COLUMN "posterUrl" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;
