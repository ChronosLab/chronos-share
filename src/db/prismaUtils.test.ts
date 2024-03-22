import prisma from './client'
import { createUser } from './prismaUtils';

describe('prismaUtils', () => {
    afterAll(async () => {
        await prisma.$disconnect();
    });

    it('creates a user', async () => {
        const user = await createUser({
            email: 'test@asr.com',
            password: 'password',
            username: 'test'
        });
        expect(user).toHaveProperty('id');
    });
});