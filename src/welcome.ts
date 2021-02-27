import {computedFrom} from 'aurelia-framework';
import { inject } from 'aurelia-dependency-injection';
import { BindingEngine, observable } from 'aurelia-framework';
import { AssetService } from 'assetService';
import { AssetData } from 'Asset';

import { HttpClient, json } from 'aurelia-fetch-client';


let httpClient = new HttpClient();
  

@inject(AssetService, BindingEngine)

export class Welcome 
{
  assetService:AssetService;
  
  /*{
  "id": 0,
  "assetName": "Billy",
  "department": 4,
  "countryOfDepartment": "US",
  "eMailAdressOfDepartment": "bill@microsoft.com",
  "purchaseDate": "2021-02-27T14:40:27.3440432Z",
  "broken": false
}*/

  asset: AssetData = <AssetData>
  {
    id:0,
    assetName: 'Billy',
    department: 4,
    countryOfDepartment: 'US',
    eMailAdressOfDepartment: 'bill@microsoft.com',
    broken: false,
    purchaseDate: new Date,
  };
  result:string;  


  public heading = 'Welcome to Hann Asset App!';
    
  constructor(_AssetService) 
  {
    this.assetService = _AssetService;
  }
  setup(data)
  {
    this.asset = data;
    //alert(json(data).toString());
  }
  getData() 
  {
    //alert(this.asset.id);
    this.assetService.getAsset(this.asset.id).then(response=>
      {
        this.setup(response);
        console.log("test:"+response);
      });
    /*httpClient.fetch('https://localhost:44377/February2021Api/1').then(response => {
      if (response.ok && response.status === 200) 
      {
        console.log(response);
        return response.json().then(data => 
          {
            this.setup(data);
            console.log(data);
          });
      }
      return Promise.reject(response.text());
     });*/

  }

  createAsset() 
  {
    //this.getData();
    //alert(`Welcome, ${json}!`);
    //alert(`Welcome, ${this.asset.AssetName}!`);
    //this.asset.ID = 0;
    
    this.asset.purchaseDate = (new Date());
    console.log("createAsset"+json(this.asset).toString());
    this.assetService.addAsset(this.asset);
    
  }
  
}

