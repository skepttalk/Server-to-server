const express = require("express");

const app = express();
const port = 5050;

app.get("/Cpi&Wpi", async (req, res) => {
  try {
    const url3 =
      "https://api.data.gov.in/resource/044725f1-8db2-481c-9bf9-0b901d4f785f?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b&format=json";

    //   const url4  = "https://api.data.gov.in/resource/9d67b242-0243-4298-adf9-7617dbeba7ab?api-key=579b464db66ec23bdd000001969cbceb3f64453d4b4024d9fe1c137b&format=json"

    const res1 = await fetch(url3);

    const data = await res1.json();

    //   const res2 = await fetch(url4);
    //   const data2 = await res2.json();

    const rural = data.records.find((name) => name.sector === "Rural");

    const urban = data.records.find((name) => name.sector === "Urban");

    const ruralEducation = parseInt(rural.education);

    const urbanEducation = parseInt(urban.education);

    const diffrence = urbanEducation - ruralEducation;

    const compareResult = {
      ruralEducation,
      urbanEducation,
      diffrence,
    };

    res.send(
      JSON.stringify(
        {
          compareResult,
        },
        null,
        2,
      ),
    );
  } catch (err) {
    res.status(500).json({ error: " internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
