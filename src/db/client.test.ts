import prisma from './client'

describe('prismaUtils', () => {
    afterAll(async () => {
        await prisma.$disconnect();
    });

    it('creates a user', async () => {
        const user = await prisma.user.create({
            data: {
                email: 'test@asr.com',
                password: 'password',
                username: 'test'
            }
        });
        expect(user).toHaveProperty('id');
    });
});