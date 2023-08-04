import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import DataTable from "./DataTable.js";
import { age_certification, roles } from "./utils.js";

const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

const DataGenerator = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const generateData = () => {
    const tempData1 = [];
    const tempData2 = [];

    for (let i = 0; i < 100; i++) {
      const id = i + 1;
      const title = faker.lorem.words();
      const description = faker.lorem.paragraph();
      const release_year = faker.date.past().getFullYear();
      const age_cert = getRandomItem(age_certification);
      const runtime = Math.floor(Math.random() * 150) + 30;
      const genres = [
        faker.music.genre(),
        faker.music.genre(),
        faker.music.genre(),
      ].join(", ");
      const production_country = faker.location.countryCode();
      const seasons = Math.floor(Math.random() * 10) + 1;

      tempData1.push({
        id,
        title,
        description,
        release_year,
        age_cert,
        runtime,
        genres,
        production_country,
        seasons,
      });

      const creditId = id;
      const titleId = id;
      const real_name = faker.person.firstName();
      const character_name = faker.person.firstName();
      const role = getRandomItem(roles);

      tempData2.push({
        id: creditId,
        title_id: titleId,
        real_name,
        character_name,
        role,
      });
    }

    setData1(tempData1);
    setData2(tempData2);
  };

  return (
    <div>
      <div className="header">
        <button onClick={generateData}>Generate Data</button>
        <div>
          <CSVLink className="csv-link" filename={"titles.csv"} data={data1}>
            Download Titles
          </CSVLink>
          <CSVLink className="csv-link" filename={"credits.csv"} data={data2}>
            Download Credits
          </CSVLink>
        </div>
      </div>
      <div className="data-tables">
        <DataTable
          data={data1}
          columns={[
            "ID",
            "Title",
            "Description",
            "Release Year",
            "Age Certification",
            "Runtime",
            "Genres",
            "Production Country",
            "Seasons",
          ]}
        />
        <DataTable
          data={data2}
          columns={["ID", "Title ID", "Real Name", "Character Name", "Role"]}
        />
      </div>
    </div>
  );
};

export default DataGenerator;
