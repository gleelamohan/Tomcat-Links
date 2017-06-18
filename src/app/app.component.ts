import { Component,OnInit } from '@angular/core';
import { IEnvironment } from './environment';
import { IParis } from './environment';

import { EnvironmentService } from './environment.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app.component.html',
    providers:[EnvironmentService]
})
export class AppComponent implements OnInit{ 


    pageTitle:string ="Tomcat References";
       environments: IEnvironment[];
        blrenvironments: IParis[];
        parisenv: IParis[];
        general:IParis[];
          listFilter: string;
          parFilter: string;
          banFilter: string;
       
       errorMessage: string;
     constructor(private _envService: EnvironmentService) {


   }

     ngOnInit(): void {
        this._envService.getEnvDetails()
                .subscribe(environments =>  this.selectedNavItem(environments),
                                        
                           error => this.errorMessage = <any>error);

       
    }

     selectedNavItem(item: IEnvironment[]) {
         this.parisenv = item[0].Paris;
         this.blrenvironments = item[0].Bangalore;
         this.general = item[0].General;
      }
}
