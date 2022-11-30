import { table } from "./utils/Airtable"

const example = {
    "fields": {
        "name": "newNamesofFields",
        "s1q1": "daskjjhjk",
        "s1q2": "jk",
        "s1q3": "jk",
        "s2q1": "jhk",
        "s2q2": "kjhkh",
        "s2q3": "kjhkjhkjh"
    }
}


export default async (req, res) => {

    // const body = req.body
    // const { name, s1q1, s1q2, s1q3, s2q1, s2q2, s2q3 } = body.fields
    try {
        const createdRecords = await table.create([{
            "fields": {
                "name": "this is new",
                "s1q1": "daskjjhjk",
                "s1q2": "jk",
                "s1q3": "jk",
                "s2q1": "jhk",
                "s2q2": "kjhkh",
                "s2q3": "kjhkjhkjh"
            }

            // "fields": {
            //     name,
            //     s1q1,
            //     s1q2,
            //     s1q3,
            //     s2q1,
            //     s2q2,
            //     s2q3
            // }
        }])
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }

        // const minifiedRecords = getMinifiedRecords(records)
        res.statusCode = 200
        res.json(createdRecord)
    }
    catch (err) {
        console.log(err)
        res.statusCode = 500
        return res.json({ msg: "Something went wrong!" })
    }
}


// export default function async(req, res) {
//     try {
//         const records = await table.select({}).firstPage();
//         const minifieldRecords = minifyRecords(records);
//     }
// }


// "fields": {
//     "name": "newNamesofFields",
//     "s1q1": "daskjjhjk",
//     "s1q2": "jk",
//     "s1q3": "jk",
//     "s2q1": "jhk",
//     "s2q2": "kjhkh",
//     "s2q3": "kjhkjhkjh"
// }