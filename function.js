function CheckCurrentThanLastMeterBill(curr, last) {
    if (curr > last) {
        return true;
    } else if (curr == last) {
        return 0;
    } else {
        return false;
    }
}

function CalculateWaterbill(curr, last) {
    const meterCheck = CheckCurrentThanLastMeterBill(curr, last);
    if (meterCheck === true) {
        return (curr - last) * 5;
    } else if (meterCheck === 0) {
        return "This room unused";
    } else {
        return "Invalid Meter Reading";
    }
}

function CalculateElectricBill(curr, last) {
    const meterCheck = CheckCurrentThanLastMeterBill(curr, last);
    if (meterCheck === true) {
        return (curr - last) * 6;
    } else if (meterCheck === 0) {
        return "This room unused";
    } else {
        return "Invalid Meter Reading";
    }
}

function CheckinComboboxBill(Combobox, CalculatedElectricBill, CalculatedWaterbill) {
    // ตรวจสอบกรณีค่าที่ส่งเข้ามาเป็นข้อความ "Invalid Meter Reading"
    if (CalculatedElectricBill === "Invalid Meter Reading" || CalculatedWaterbill === "Invalid Meter Reading") {
        return "Invalid Meter Reading";
    }

    // ตรวจสอบกรณีค่าที่ส่งเข้ามาเป็นข้อความ "This room unused"
    if (CalculatedElectricBill === "This room unused" || CalculatedWaterbill === "This room unused") {
        return "This room unused";
    }

    // คำนวณผลรวมตามประเภทห้อง
    let CalculatedComboboxBill;
    if (Combobox === "Single Bed") {
        CalculatedComboboxBill = CalculatedElectricBill + CalculatedWaterbill + 1500;
    } else if (Combobox === "Double Bed") {
        CalculatedComboboxBill = CalculatedElectricBill + CalculatedWaterbill + 2000;
    }
    return CalculatedComboboxBill;
}


module.exports = {
    CalculateWaterbill,
    CalculateElectricBill,
    CheckCurrentThanLastMeterBill,
    CheckinComboboxBill
};
