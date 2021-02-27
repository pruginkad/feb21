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
  
  asset: AssetData = <AssetData>
  {
    AssetName : 'test1',
    CountryOfDepartment : 'DE',
    EMailAdressOfDepartment : 'test@test.com'
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
    alert(json(data).toString());
  }
  getData() 
  {
    httpClient.fetch('https://localhost:44377/February2021Api/1').then(response => {
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
     });

  }

  createAsset() 
  {
    //this.getData();
    //alert(`Welcome, ${json}!`);
    //alert(`Welcome, ${this.asset.AssetName}!`);
    //this.asset.ID = 0;
    this.assetService.addAsset(this.asset);
  }
  
}

