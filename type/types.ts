export const CREATED_AT = 'createdAt'
export const FILE_NAME_ASC = 'fileNameAsc'
export const FILE_NAME_DESC = 'fileNameDesc'

export type SortType = typeof CREATED_AT | typeof FILE_NAME_ASC | typeof FILE_NAME_DESC


export const DropDownOptions: { value: SortType, label: string }[] = [
    {
        value: CREATED_AT, label: 'Created At'
    },
    { value: FILE_NAME_ASC, label: 'File Name Ascending' },
    {value: FILE_NAME_DESC, label: 'File Name Descending'}
    
]