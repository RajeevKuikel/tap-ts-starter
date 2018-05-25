import * as tapTypes from './tap-types'
var xml2js = require('xml2js')

export function parseItem(xmlfile: Buffer) {
  return new Promise(function(resolve, reject) {
    xml2js.parseString(xmlfile, function(err: any, result: any) {
      //console.dir(result);
      if (result != null) {
        let rec = new tapTypes.streamRecord()
        rec.stream = 'xml'
        rec.time_extracted = new Date()
        rec.record = result
        resolve(rec) //if the condition result is not equal to null the condition is fulfilled so it is resolved else it is rejected.
      } else {
        reject(Error('It broke'))
      }
    })
  })
}
