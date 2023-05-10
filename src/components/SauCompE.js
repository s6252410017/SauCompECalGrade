//rfce คีย์ลัด1
import React, { useState } from 'react'

function SauCompE() {

    const [stuName, setStuName] = useState("??? ?????");
    const [midterm, setMidterm] = useState(0);
    const [final, setFinal] = useState(0);
    const [total, setTotal] = useState(0);
    const [grade, setGrade] = useState(0);

    const handleChangeOfName = (e) => {
        setStuName(e.target.value)
    }

    const handleChangeOfMidterm = (e) => {
        setMidterm(e.target.value)
    };

    const handleChangeOfFinal = (e) => {
        setFinal(e.target.value)
    };

    const handleClickTotalScore = (e) => {
        setTotal(parseFloat(midterm) + parseFloat(final) );
        calGrade(parseFloat(midterm) + parseFloat(final) );
    };

    const calGrade = (e) => {
        if (e > 80) {
            setGrade('A');
          } else if (e >= 71 && e <= 80) {
            setGrade('B');
          } else if (e >= 61 && e <= 70) {
            setGrade('C');
          } else if (e >= 51 && e <= 60) {
            setGrade('D');
          } else if (e <= 50) {
            setGrade('E');
          } else{
            setGrade('F')
          }
    };

    return (
        <>
            <h1>แสดงผลการเรียน</h1>
            <hr />
            ป้อนชื่อ : <input onChange={handleChangeOfName} type="text" placeholder='ชื่อ-สกุล' /> <br />
            ป้อนผลกลางภาค : <input onChange={handleChangeOfMidterm} type="number" placeholder='0.00' /> <br />
            ป้อนผลปลายภาค : <input onChange={handleChangeOfFinal} type="number" placeholder='0.00' /> <br />
            <button onClick={handleClickTotalScore}>คำนวณ</button>&nbsp;&nbsp;<button>ยกเลิก</button>
            <hr />
            คุณ : {stuName} <br />
            คะแนนกลางภาค : {midterm} <br />
            คะแนนปลายภาค : {final} <br />
            คะแนนรวม : {total} <br />
            คะแนนเกรดที่ได้ : {calGrade} <br />
        </>
    )
}

export default SauCompE
//-------------------------------

//rfc คีย์ลัด2
// import React from 'react'

// export default function SauCompE() {
//   return (
//     <div>SauCompE</div>
//   )
// }
//-------------------------------

//rafce คีย์ลัด3
// import React from 'react'

// const SauCompE = () => {
//   return (
//     <div>SauCompE</div>
//   )
// }

// export default SauCompE
//-------------------------------

//rafc คีย์ลัด4
// import React from 'react'

// export const SauCompE = () => {
//   return (
//     <div>SauCompE</div>
//   )
// }

