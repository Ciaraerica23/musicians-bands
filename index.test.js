const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async ()=> {
        const band1 = await Band.create({ name: 'George', instrument:"guitar"});
        expect(band1.name).toBe('George');
        expect(band1.instrument).toBe('guitar');
    })

    test('can create a Musician', async() => {
        const musician1 = await Musician.create({ name: 'Tim', genre: 'country' });
    
        expect(musician1.name).toBe('Tim');
        expect(musician1.genre).toBe('country')
    })
})