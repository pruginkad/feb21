import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)


export class AssetService 
{
    http: HttpClient;
    constructor(http) 
    {
      this.http = http;
      http.configure(config => 
      {
        config
          .useStandardConfiguration()
          .withBaseUrl('https://localhost:44377/February2021Api/')
            .withDefaults(
            {
              headers: 
              {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'Fetch'
              }
            })
      });
    }

    getAsset(id) 
    {
      return this.http.fetch(id)
        .then(response => response.json())
        .then(asset => 
        {
          console.log(asset);
          // return card;
        });
    }

    addAsset(asset) 
    {
      return this.http.fetch('',
        {
          method: 'POST',
          body: json(asset)
        });
    }
}


