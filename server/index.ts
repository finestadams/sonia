'use server';

import { FileInterface } from "@/interfaces/general.interfaces"
import { parseCSV, sortData } from "@/utils"

// get the path of the data and process the csv file

export async function getAndProcessCSV(sort?: string) {
    try {
        const path = process.cwd() + '/data.csv' // Get the path of the CSV file
        const result = (await parseCSV(path)) as FileInterface[]

        // also process the sort
        const sortD = sortData(result, sort ) as FileInterface[] // Sort the data based on the selected option
return sortD
    } catch (error) {
        console.error('Error processing CSV file:', error)
    }
}



