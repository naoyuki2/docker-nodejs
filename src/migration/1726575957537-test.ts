import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1726575957537 implements MigrationInterface {
    name = 'Test1726575957537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "telephone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "telephone"`);
    }

}
