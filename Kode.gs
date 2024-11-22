function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Monitor Gempa BMKG')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  try {
    const ss = SpreadsheetApp.openById('<ID-Spreadsheet>');
    const sheet = ss.getSheetByName('gempa');
    
    if (!sheet) {
      return { success: false, error: 'Sheet tidak ditemukan' };
    }
    
    const data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) {
      return { success: false, error: 'Data tidak ditemukan' };
    }

    const headers = data[0].map(header => header.toString().toLowerCase().trim());
    const jsonData = data.slice(1).map(row => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index] ? row[index].toString().trim() : '';
      });
      return obj;
    }).reverse();
    
    return { success: true, data: jsonData };
    
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
