const { CalculateWaterbill, CalculateElectricBill, CheckinComboboxBill, CheckCurrentThanLastMeterBill  } = require('./function.js');

test('CalculateWaterbill', () => {
    expect(CalculateWaterbill(20, 10)).toBe(50);
    expect(CalculateWaterbill(15, 5)).toBe(50); 
    expect(CalculateWaterbill(5, 10)).toBe("Invalid Meter Reading");
    expect(CalculateWaterbill(5, 5)).toBe("This room unused");
});

test('CalculateElectricBill', () => {
    expect(CalculateElectricBill(20, 10)).toBe(60); 
    expect(CalculateElectricBill(15, 5)).toBe(60);  
    expect(CalculateElectricBill(5, 10)).toBe("Invalid Meter Reading")
    expect(CalculateElectricBill(5, 5)).toBe("This room unused")

});

//----------------------------------------------------------------

test('CalculateCombobox Single Bed normal', () => {
    const BillEletric = CalculateElectricBill(20, 10)
    const Billwater = CalculateWaterbill(20, 10)
    expect(CheckinComboboxBill('Single Bed', BillEletric, Billwater)).toBe(1610);
});

test('CalculateCombobox Single Bed Invalid Meter Reading one params', () => {
    const BillEletric = CalculateElectricBill(5, 10)
    const Billwater = CalculateWaterbill(20, 10)
    expect(CheckinComboboxBill('Single Bed', BillEletric, Billwater)).toBe("Invalid Meter Reading");
});

test('CalculateCombobox Single Bed Invalid Meter Reading two params', () => {
    const BillEletric = CalculateElectricBill(5, 10)
    const Billwater = CalculateWaterbill(5, 10)
    expect(CheckinComboboxBill('Single Bed', BillEletric, Billwater)).toBe("Invalid Meter Reading");
});


test('CalculateCombobox Single Bed unused', () => {
    const BillEletric = CalculateElectricBill(5, 5)
    const Billwater = CalculateWaterbill(5, 5)
    expect(CheckinComboboxBill('Single Bed', BillEletric, Billwater)).toBe("This room unused");
});

//------------------------------------------------------------------

test('CalculateCombobox Double Bed 02 normal', () => {
    const BillEletric = CalculateElectricBill(20, 10)
    const Billwater = CalculateWaterbill(20, 10)
    expect(CheckinComboboxBill('Double Bed', BillEletric, Billwater)).toBe(2110);
});

test('CalculateCombobox Double Bed Invalid Meter Reading one params', () => {
    const BillEletric = CalculateElectricBill(5, 10)
    const Billwater = CalculateWaterbill(20, 10)
    expect(CheckinComboboxBill('Double Bed', BillEletric, Billwater)).toBe("Invalid Meter Reading");
});

test('CalculateCombobox Double Bed Invalid Meter Reading two params', () => {
    const BillEletric = CalculateElectricBill(5, 10)
    const Billwater = CalculateWaterbill(5, 10)
    expect(CheckinComboboxBill('Double Bed', BillEletric, Billwater)).toBe("Invalid Meter Reading");
});


test('CalculateCombobox Double Bed unused', () => {
    const BillEletric = CalculateElectricBill(5, 5)
    const Billwater = CalculateWaterbill(5, 5)
    expect(CheckinComboboxBill('Double Bed', BillEletric, Billwater)).toBe("This room unused");
});