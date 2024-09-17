import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddress1726576266844 implements MigrationInterface {
    name = 'AddAddress1726576266844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}
