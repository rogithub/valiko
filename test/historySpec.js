const ko = require('./koMock');
const Form = require('./form');

describe('History', () => {
	describe('history', () => {
		it('should create history', (done) => {
            let frm = new Form(ko);
            
            console.log("1: ", frm.history());
            expect(frm.history().length).toBe(0);
            
			frm.load({
				numbers: [1],
				name: "Jhon"
            });

            console.log("2: ", frm.history());

            expect(frm.history().length).toBe(2);
            expect(frm.history()[0].numbers[0]).toBe(1);
            expect(frm.history()[1].name).toBe("Jhon");

            frm.name.value("Jeff");
            expect(frm.history().length).toBe(3);
            console.log("3: ", frm.history());

            frm.numbers.value.push(1);

            expect(frm.history().length).toBe(4);

            console.log("4: ", frm.history());
            done();			
		});
	});
});
