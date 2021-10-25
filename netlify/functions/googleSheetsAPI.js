import { GoogleSpreadsheet } from "google-spreadsheet"

exports.handler = async (event, context, callback) => {
    try {
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)
      await doc.useServiceAccountAuth(
        require("../../keys/lil-pinks-pastries-frontend-a964329b4512.json")
      )
      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]

      const data = JSON.parse(event.body)
      const addedRow = await sheet.addRow(data)

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "row added",
        }),
      }
    } catch (e) {
      return {
        statusCode: 500,
        body: e.toString(),
      }
    }
  },
}
