import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTest1726577723752 implements MigrationInterface {
    name = 'AddTest1726577723752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "test" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "test"`);
    }

}
