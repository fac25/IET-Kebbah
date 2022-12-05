const Airtable = require("airtable");

// SURVEY -----------------------------------------------
const surveyBase = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_SURVEY_BASE_ID);

const surveyTable = surveyBase(
  process.env.NEXT_PUBLIC_AIRTABLE_SURVEY_TABLE_NAME
);

const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

export { surveyTable, feedbackTable, minifyRecord, getMinifiedRecords };
