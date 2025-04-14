import { CREATED_AT, FILE_NAME_ASC, FILE_NAME_DESC } from "@/type/types";


export interface FileInterface {
    createdAt: string; // File name
    fileName: string; // File size in bytes 
}

export type SortOption = typeof CREATED_AT | typeof FILE_NAME_ASC | typeof FILE_NAME_DESC; // Sort option type

export  interface DropdownInterface {
    onChange: (value: SortOption) => void;
    sortBy: SortOption; // Function to handle dropdown change
}