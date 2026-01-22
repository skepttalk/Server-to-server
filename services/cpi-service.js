export const cpi  =async ()=>{
    const url3 =
      "https://api.data.gov.in/resource/044725f1-8db2-481c-9bf9-0b901d4f785f?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b&format=json";

    const res1 = await fetch(url3);

    const data = await res1.json();


    const ruralArr = data.records.filter((name) => name.sector === "Rural");

    const urbanArr = data.records.filter((name) => name.sector === "Urban");

    const rural = ruralArr[0];

    const urban = urbanArr[0]


    const ruralEducation = parseInt(rural.education);

    const urbanEducation = parseInt(urban.education);

    const diffrence = urbanEducation - ruralEducation;

    const compareResult = {
      ruralEducation,
      urbanEducation,
      diffrence,
    };

    return JSON.stringify(compareResult);

}