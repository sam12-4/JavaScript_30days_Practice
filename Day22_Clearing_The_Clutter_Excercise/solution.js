import path from "path"
import fs from "fs/promises"
import { writeFile } from 'fs/promises';

let filePath = path.join(process.cwd(), "files");
let lastFileName = path.basename(filePath);

let fileContent = await fs.readdir(lastFileName);
let fileArray = [];
let AllFiles =[];
let newArray = []

async function CreateExtensionArray(fileContent){
    for (let index = 0; index < fileContent.length; index++) {
        const element = fileContent[index];
        fileArray.push(element.split(".").pop())
        AllFiles.push(element)
    }
}

async function createFolder(fileArray){
    await fileArray.filter((item, index)=>{
        if(fileArray.indexOf(item) == index){
            newArray.push(fileArray[index])
        }
    })
    for (const files of newArray){
        fs. mkdir(files)
    }
}

async function appendFilesToFolder(folderArray, allFilesArray){
        allFilesArray.forEach(async (element)=>{
            let filePath =path.join(process.cwd(), element.split(".").pop())
            let writePath = await path.join(filePath, element)
            let content = writeFile(writePath, 'Content to write to the file')
            console.log(writePath);
        })
}

async function main(){
    await CreateExtensionArray(fileContent)
    await createFolder(fileArray)
    await appendFilesToFolder(newArray, AllFiles)
}

main()







