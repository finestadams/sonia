//
import fs from 'fs'
import csv from 'csv-parser'
import { FileInterface } from '@/interfaces/general.interfaces'

export function parseCSV(csvString: string){
    // promise to parse CSV string
    return new Promise((resolve, reject) => {
        const result: FileInterface[] = [] // Array to store parsed data
        fs.createReadStream(csvString)
        .pipe(csv({ separator: ';', headers: false }))
            .on('data', (data: Record<string, unknown>) => {
                result.push({
                    createdAt: Object.values(data)[0] as string,
                    fileName: Object.values(data)[1] as string,
                })
            })
            .on('end', () => {
                resolve(result as FileInterface[]) // Resolve the promise with the parsed data
            })
    })
}

// sort function to sort the data based on the selected option
export function sortData(data: FileInterface[], sortOption?: string) {
    switch (sortOption) {
        case 'createdAt':
            return data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        case 'fileNameAsc':
            return data.sort((a, b) => a.fileName.localeCompare(b.fileName))
        case 'fileNameDesc':
            return data.sort((a, b) => b.fileName.localeCompare(a.fileName))
        default:
            return data
    }
}