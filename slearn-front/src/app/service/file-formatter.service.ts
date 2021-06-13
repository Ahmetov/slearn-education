import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileFormatterService {

  constructor() { }

  //Составляет комбинированный FormData из json и файла
  //для дальнейшей его отправки на сервер
  public generateFormData(jsonDataParamName: string,
                          jsonData: any,
                          fileData: File,
                          fileName: string): FormData {
    const uploadImageData = new FormData();
    uploadImageData.append(
      jsonDataParamName,
      new Blob([JSON.stringify(jsonData)],{
        type: "application/json"
      }));
    uploadImageData.append('file', fileData, fileName);

    return uploadImageData;
  }
}
