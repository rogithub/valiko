const ko = require('./koMock');
const Form = require('./form');

describe('History', () => {
	describe('history', () => {
		it('should create history', (done) => {
            let frm = new Form(ko);
                        
            expect(frm.history().length).toBe(0);
            
			frm.load({
				numbers: [1],
				name: "Jhon"
            });

            frm.numbers.value.subscribe(n => {
                console.log(frm.history());
            });
            

            expect(frm.history().length).toBe(2);
            expect(frm.history()[0].numbers[0]).toBe(1);
            expect(frm.history()[1].name).toBe("Jhon");

            frm.name.value("Jeff");
            expect(frm.history().length).toBe(3);

            frm.numbers.value.push(1);

            expect(frm.history().length).toBe(4);

            done();			
		});
	});
});
