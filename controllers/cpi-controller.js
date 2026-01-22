import {cpi} from "../services/cpi-service.js";

const controlcpi = async (req, res) => {
  try {
      const data = await cpi();
      if(!data){
        throw new Error ("not found");
      }
      res.json(data);

      } catch (err) {
    res.status(500).json({ error: " internal server error" });
  }
};

export default controlcpi;
